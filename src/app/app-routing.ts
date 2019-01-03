import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "./pages/sign-up/sign-up/sign-up.component";
import { SignInComponent } from "./pages/sign-in/sign-in/sign-in.component";
import { AppHomeComponent } from "./pages/app-home/app-home.component";
import { UserlandingComponent } from "./modules/user/pages/userlanding/userlanding.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/signin',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        component: SignInComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'customers',
        children: [
            {
                path: '',
                loadChildren: './modules/customer/customer.module#CustomerModule'
            }
        ]
    },
    {
        path: 'users',
        component: UserlandingComponent,
        children: [
            {
                path: '',
                loadChildren: './modules/user/user.module#UserModule'
            }
        ]
    }
];

export const routing = RouterModule.forRoot(routes);