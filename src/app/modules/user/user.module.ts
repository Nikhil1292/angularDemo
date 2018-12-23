import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userRouting } from './user.routing';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserlandingComponent } from './pages/userlanding/userlanding.component';

@NgModule({
  imports: [
    CommonModule,
    userRouting
  ],
  declarations: [UserListComponent, UserlandingComponent],
  exports: [UserListComponent, UserlandingComponent]
})
export class UserModule { }
