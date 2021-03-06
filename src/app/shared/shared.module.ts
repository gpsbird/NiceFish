import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserInfoComponent } from '../user/user-info/user-info.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { FormControlComponent } from '../user/user-profile/dynamic-form/form-control.component';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserLoginComponent,
    UserInfoComponent,
    UserProfileComponent,
    FormControlComponent
  ],
  exports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    UserLoginComponent,
    UserInfoComponent,
    UserProfileComponent
  ]
})

export class SharedModule {

}