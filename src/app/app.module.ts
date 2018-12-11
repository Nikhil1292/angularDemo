import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignUpComponent } from './pages/sign-up/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in/sign-in.component';
import { routing } from "./app-routing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import { CustomerListComponent } from './modules/customer/components/customer-list/customer-list.component';
import { CustmerListLandingComponent } from './modules/customer/pages/custmer-list-landing/custmer-list-landing.component';
import { AppHomeComponent } from "./pages/app-home/app-home.component";
import { SharedModule } from "./modules/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    CustomerListComponent,
    CustmerListLandingComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule, 
    ReactiveFormsModule,
    ButtonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
