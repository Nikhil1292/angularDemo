import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./components/user-list/user-list.component";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { UserlandingComponent } from "./pages/userlanding/userlanding.component";

const routes: Routes = [
    {
        path: '',
        component: UserListComponent
    }
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(routes);