import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutes } from './user.routing';
import { UserComponent } from './view/user.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutes
  ],
  declarations: [UserComponent]
})
export class UserModule { }
