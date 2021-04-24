import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { DogOwnerHomescrenComponent } from './components/dog-owner-homescren/dog-owner-homescren.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TrainerAddingFormComponent } from './components/trainer-adding-form/trainer-adding-form.component';
import { TrainerDetailsViewComponent } from './components/trainer-details-view/trainer-details-view.component';

const routes: Routes = [
{path: 'signup',component: SignUpComponent  },
{path: 'navbar',component: NavigationBarComponent},
{path:'login',component: LoginPageComponent},
{path:'admin',component:AdminHomePageComponent},
{path:'addTrainer',component:TrainerAddingFormComponent},
{path:'dogOwnerHomeScreen',component:DogOwnerHomescrenComponent},
{path:'trainerDetailsView',component:TrainerDetailsViewComponent},
{path:'about',component:AboutComponent},
{path: '**',component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DogOwnerHomescrenComponent,TrainerDetailsViewComponent];
