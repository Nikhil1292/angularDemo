import { RouterModule, Routes } from "@angular/router";
import { CustomerListComponent } from "./components/customer-list/customer-list.component";
import { ModuleWithProviders } from "@angular/core";
import { AppHomeComponent } from "../../pages/app-home/app-home.component";

const routes: Routes = [
    {
        path: '',
        component: AppHomeComponent,
        children: [
            {
                path: 'customer-list',
                component: CustomerListComponent
            }
        ]
    }
];

export const customerRouting: ModuleWithProviders = RouterModule.forChild(routes);