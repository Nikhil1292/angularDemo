import { SidebarComponent } from "./sidebar/sidebar.component";
import { MenuModule } from 'primeng/components/menu/menu';

import { NgModule } from "@angular/core";

@NgModule({
    declarations: [SidebarComponent],
    imports:[],
    exports:[
        SidebarComponent,
        MenuModule
    ]
})

export class SharedModule {

}