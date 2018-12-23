import { SidebarComponent } from "./sidebar/sidebar.component";
import { MenuModule } from 'primeng/menu';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports:[
        MenuModule,
        DropdownModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    exports:[
        SidebarComponent,
        MenuModule,
        DropdownModule,
        BrowserModule,
        BrowserAnimationsModule
    ]
})

export class SharedModule {

}