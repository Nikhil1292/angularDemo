import { NgModule } from "@angular/core";
import { CustomerListComponent } from "./components/customer-list/customer-list.component";
import { customerRouting } from "./customer.routing";
import { AppHomeComponent } from "../../pages/app-home/app-home.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        CustomerListComponent,
        AppHomeComponent
    ],
    imports: [
        customerRouting,
        SharedModule
    ],
    exports: [
        CustomerListComponent
    ],
    providers: []
})

export class CustomerModule {

}