import { SidebarComponent } from "./sidebar/sidebar.component";
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";
import { TopmenuComponent } from './topmenu/topmenu.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
    declarations: [
        SidebarComponent,
        TopmenuComponent
    ],
    imports: [
        MenuModule,
        DropdownModule,
        MenubarModule
    ],
    exports: [
        SidebarComponent,
        MenuModule,
        DropdownModule,
        MenubarModule,
        TopmenuComponent
    ]
})

export class SharedModule {

}