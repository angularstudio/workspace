export interface AngularstudioClrMetadataSaveResult<T> {

    name: string;
    values: Array<{ sensitive: boolean, value: T }>;

}
