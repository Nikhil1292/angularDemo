import { NgModule } from "@angular/core";
import { CustomerListComponent } from "./components/customer-list/customer-list.component";
import { customerRouting } from "./customer.routing";

@NgModule({
    declarations:[CustomerListComponent],
    imports:[customerRouting],
    exports:[CustomerListComponent],
    providers:[]
})

export class CustomerModule
{

}