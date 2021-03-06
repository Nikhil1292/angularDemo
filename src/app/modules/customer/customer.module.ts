import { NgModule } from "@angular/core";
import { CustomerListComponent } from "./components/customer-list/customer-list.component";
import { customerRouting } from "./customer.routing";
import { AppHomeComponent } from "../../pages/app-home/app-home.component";
import { SharedModule } from "../shared/shared.module";
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { PersonalDetailsComponent } from "./components/personal-details/personal-details.component";
import { AddressComponent } from "./components/address/address.component";
import { EducationComponent } from "./components/education/education.component";

@NgModule({
    declarations: [
        CustomerListComponent,
        AppHomeComponent,
        CustomerAddComponent,
        PersonalDetailsComponent,
        AddressComponent,
        EducationComponent
    ],
    imports: [
        customerRouting,
        SharedModule
    ],
    exports: [
        CustomerListComponent,
        SharedModule,
        PersonalDetailsComponent,
        AddressComponent,
        EducationComponent
    ],
    providers: []
})

export class CustomerModule {

}