import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutes } from './user.routing';
import { UserComponent } from './view/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UserRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
