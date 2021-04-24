import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';

import { TrainerAddingFormComponent } from './components/trainer-adding-form/trainer-adding-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DogOwnerHomescrenComponent } from './components/dog-owner-homescren/dog-owner-homescren.component';
import { TrainerDetailsViewComponent } from './components/trainer-details-view/trainer-details-view.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent, 
    SignUpComponent,
    NavigationBarComponent,
    LoginPageComponent,
    AdminHomePageComponent,
    TrainerAddingFormComponent,
    DogOwnerHomescrenComponent,
    TrainerDetailsViewComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
