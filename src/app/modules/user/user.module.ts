import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userRouting } from './user.routing';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    userRouting
  ],
  declarations: [UserListComponent],
  exports: [UserListComponent]
})
export class UserModule { }
