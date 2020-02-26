import { ToolbarMenuItem } from '@angular.studio/toolbar';

export class Card {

    public imageUrl: string;
    public label?: string;
    public labelColor?: string;
    public labelFontSize?: string;
    public width?: string;
    public height?: string;
    public backgroundColor?: string;

    public menuClass?: string;
    public menuIconClass?: string;
    public menuIconColor: string;
    public menuIconFontSize: string;
    public menuItems?: Array<ToolbarMenuItem>;

}
