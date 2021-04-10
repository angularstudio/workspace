export class HeaderConfig {

    public height: string = '60px';
    public backgroundColor: string = '#ddd';

    public constructor(obj: HeaderConfig) {

        Object.assign(this, obj);

    }

}
