export class AngularStudioClrLoginConfigButton {

    public label: string;
    public class: string;
    public provider: 'facebook' | 'github' | 'google';
    public buttonClass: 'btn btn-outline-secondary' | 'btn btn-outline-primary';

    public constructor(config: AngularStudioClrLoginConfigButton) {

        Object.assign(this, config);

    }

}
