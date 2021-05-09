import { AngularstudioClrWizardConfigStep } from './angularstudio-clr-wizard-config-step';

export class AngularStudioClrWizardConfig {

    public title: string;
    public editing?: boolean = false;
    public deleteLabel?: string = 'DELETE';
    public size?: 'sm' | 'md' | 'lg';
    public steps: Array<AngularstudioClrWizardConfigStep> = [];

    public constructor(config: AngularStudioClrWizardConfig) {

        for (let i = 0; i < config.steps.length; i++) {

            this.steps.push(new AngularstudioClrWizardConfigStep(config.steps[ i ]));

        }

        Object.assign(this, config);

    }

}
