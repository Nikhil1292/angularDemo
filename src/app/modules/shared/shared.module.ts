import { SidebarComponent } from "./sidebar/sidebar.component";
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";
import { TopmenuComponent } from './topmenu/topmenu.component';
import { MenubarModule } from 'primeng/menubar';
import { StepsModule } from 'primeng/steps';
import { CommonModule } from "@angular/common";
import { ButtonModule } from 'primeng/components/button/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        SidebarComponent,
        TopmenuComponent
    ],
    imports: [
        MenuModule,
        DropdownModule,
        MenubarModule,
        StepsModule,
        CommonModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        SidebarComponent,
        MenuModule,
        DropdownModule,
        MenubarModule,
        TopmenuComponent,
        StepsModule,
        CommonModule,
        ButtonModule,
        ReactiveFormsModule,
        FormsModule
    ]
})

export class SharedModule {

}