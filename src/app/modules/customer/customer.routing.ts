import { RouterModule, Routes } from "@angular/router";
import { CustomerListComponent } from "./components/customer-list/customer-list.component";
import { ModuleWithProviders } from "@angular/core";

const routes:Routes = [
    {
        path:'customer-list',
        component:CustomerListComponent
    }
];

export const customerRouting: ModuleWithProviders = RouterModule.forChild(routes);