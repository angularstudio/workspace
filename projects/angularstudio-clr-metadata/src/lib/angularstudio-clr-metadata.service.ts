import { Injectable, ComponentFactoryResolver, Inject } from '@angular/core';
import { AngularStudioClrMetadataConfig } from './angularstudio-clr-metadata-config';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { AngularstudioClrMetadataSaveResult } from './angularstudio-clr-metadata-save-result';
import { AngularStudioClrMetadataComponent } from './angularstudio-clr-metadata.component';
import { AngularStudioClrMetadataConfigField } from './angularstudio-clr-metadata-config-field';
import { HttpClient } from '@angular/common/http';
import { AngularStudioClrMetadataModuleConfig } from './angularstudio-clr-metadata-module-config';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioClrMetadataService<T> {

    public width: string;
    public config: { [ name: string ]: AngularStudioClrMetadataConfig } = {};
    public formGroups: { [ name: string ]: Array<FormGroup> } = {};
    public value$: Subject<T> = new Subject();
    public save$: Subject<AngularstudioClrMetadataSaveResult<T>> = new Subject();

    public constructor(private formBuilder: FormBuilder,
                       private readonly factoryResolver: ComponentFactoryResolver,
                       @Inject('METADATA_CONFIG') private readonly moduleConfig: AngularStudioClrMetadataModuleConfig,
                       @Inject(HttpClient) private readonly httpClient: HttpClient) {

    }

    public init(config: AngularStudioClrMetadataConfig): void {

        if (this.config[ config.name ]) {

            this.config[ config.name ].rootViewContainer.remove(0);

            delete this.config[ config.name ];

        }

        this.config[ config.name ] = new AngularStudioClrMetadataConfig(config);

        this.config[ config.name ].fields = [];

        for (let i = 0; i < config.fields.length; i++) {

            this.config[ config.name ].fields.push(new AngularStudioClrMetadataConfigField(config.fields[ i ]));

        }

        this.formGroups[ config.name ] = [];

        for (let i = 0; i < config.fields.length; i++) {

            this.addFormGroup(config.name, config.fields[ i ]);

        }

        const component = this.config[ config.name ].rootViewContainer.createComponent(this.factoryResolver.resolveComponentFactory(AngularStudioClrMetadataComponent));

        component.instance.name = config.name;

    }

    public destroy(name: string): void {

        delete this.config[ name ];

    }

    public addFormGroup(name: string, field: AngularStudioClrMetadataConfigField): void {

        this.formGroups[ name ].push(this.formBuilder.group({

            label: new FormControl(field.label.value, field.label.validators),
            value: new FormControl(field.value.value, field.value.validators)

        }));

    }

    public addBlankField(name: string): void {

        const field = new AngularStudioClrMetadataConfigField({

            name: `dynamic_${ this.config[ name ].fields.length + 1 }`,

            label: {

                value: '',
                editing: true,
                focus: true,
                dynamic: true,
                validators: [ Validators.required, Validators.minLength(1) ]

            },

            value: {

                value: '',
                editing: true,
                dynamic: true,
                validators: [ Validators.required, Validators.minLength(1) ]

            }

        });

        this.config[ name ].fields.push(field);

        this.addFormGroup(name, field);

    }

    public deleteField(name: string, field: AngularStudioClrMetadataConfigField): void {

        let index;

        const fields = [];

        for (let i = 0; i < this.config[ name ].fields.length; i++) {

            if (this.config[ name ].fields[ i ].name === field.name) {

                index = i;

            } else {

                fields.push(this.config[ name ].fields[ i ]);

            }

        }

        this.config[ name ].fields = fields;

        this.formGroups[ name ].splice(index, 1);

        this.deleteByContextId(this.config[ name ].contextId, field.id);

    }

    public save(name: string): void {

        const values: Array<{ sensitive: boolean, value: T }> = [];

        for (let i = 0; i < this.formGroups[ name ].length; i++) {

            values.push({

                sensitive: this.config[ name ].fields[ i ].sensitive || false,
                value: this.formGroups[ name ][ i ].value

            });

        }

        this.save$.next({ name, values });

        // this.createByContextId(this.config[ name ].contextId, values).subscribe(result => {
        //
        //     console.log(result);
        //
        // });

    }

    public getByContextId<T>(contextId: string): Observable<Array<T>> {

        return this.httpClient.get<Array<T>>(`${ this.moduleConfig.baseUrl }/${ contextId }`);

    }

    public createByContextId<T>(contextId: string, data: Array<{ sensitive: boolean, value: T }>): Observable<Array<T>> {

        return this.httpClient.post<Array<T>>(`${ this.moduleConfig.baseUrl }/${ contextId }`, {

            data: data.map(field => {

                return {

                    contextId,
                    sensitive: field.sensitive,
                    name: field.value[ 'label' ],
                    value: field.value[ 'value' ]

                };

            })

        });

    }

    public updateByContextId<T>(contextId: string, body: any): Observable<Array<T>> {

        return this.httpClient.put<Array<T>>(`${ this.moduleConfig.baseUrl }/${ contextId }`, body);

    }

    public deleteByContextId<T>(contextId: string, metadataId: string): Observable<boolean> {

        return this.httpClient.delete<boolean>(`${ this.moduleConfig.baseUrl }/${ contextId }/${ metadataId }`);

    }

}
