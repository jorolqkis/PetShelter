import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdoptComponent } from './adopt/adopt.component';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { ShlterListComponent } from './shlter-list/shlter-list.component';
import { ShelterDetailComponent } from './shelter-detail/shelter-detail.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'adopt', component: AdoptComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sitemap', component: SiteMapComponent },
  { path: 'shelters', component: ShlterListComponent },

  { path: 'shelters/:id', component: ShelterDetailComponent },
  { path: 'logreg', component: LoginRegisterComponent },
  { path: 'reg', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
