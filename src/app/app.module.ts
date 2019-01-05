import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in/sign-in.component';
import { routing } from "./app-routing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHomeComponent } from "./pages/app-home/app-home.component";
import { SharedModule } from "./modules/shared/shared.module";
import { UserlandingComponent } from './modules/user/pages/userlanding/userlanding.component';
import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';
import { SignUpComponent } from './pages/sign-up/components/sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    //AppHomeComponent,
    UserlandingComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // ButtonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
