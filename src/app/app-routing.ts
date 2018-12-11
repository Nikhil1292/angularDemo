import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "./pages/sign-up/sign-up/sign-up.component";
import { Component } from "@angular/core";
import { SignInComponent } from "./pages/sign-in/sign-in/sign-in.component";
import { AppHomeComponent } from "./pages/app-home/app-home.component";
import { CustomerListComponent } from "./modules/customer/components/customer-list/customer-list.component";

const routes: Routes = [
    {
        path:'signin',
        component: SignInComponent
    },
    {
        path:'signup',
        component: SignUpComponent
    },
    {
        path: '',
        component: AppHomeComponent
    }
];

export const routing = RouterModule.forRoot(routes);