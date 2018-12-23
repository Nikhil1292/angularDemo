import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "./pages/sign-up/sign-up/sign-up.component";
import { SignInComponent } from "./pages/sign-in/sign-in/sign-in.component";
import { AppHomeComponent } from "./pages/app-home/app-home.component";

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
        component: AppHomeComponent,
        children:[
            {
                path: '',
                redirectTo: '/customers',
                pathMatch:'full'
            },
            {
                path:'customers',
                loadChildren:'./modules/customer/customer.module#CustomerModule'
            }
        ]
    }
];

export const routing = RouterModule.forRoot(routes);