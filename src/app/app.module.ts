import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdoptComponent } from './adopt/adopt.component';
import { AboutComponent } from './about/about.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';

import { MatListModule } from '@angular/material/list';
import { ContentfulService } from './contentful.service';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DonateComponent } from './donate/donate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { ContactComponent } from './contact/contact.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { ShlterListComponent } from './shlter-list/shlter-list.component';
import { ShelterDetailComponent } from './shelter-detail/shelter-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  { path: '', redirectTo: '/shelters', pathMatch: 'full' },
  { path: 'shelters', component: ShlterListComponent },
  { path: 'shelter/:id', component: ShelterDetailComponent }
];
@NgModule({
  declarations: [

    AppComponent,
    AboutComponent,
    AdoptComponent,
    ContactComponent,
    DonateComponent,
    HomeComponent,
    PetDetailComponent,
    ShelterDetailComponent,
    ShlterListComponent,
    SiteMapComponent,
    LoginRegisterComponent,
    RegisterComponent,
    ProfileComponent,
    CommentComponent,

  ],
  imports: [

    FlexLayoutModule,
    MatPasswordStrengthModule.forRoot(),
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: "AIzaSyBYtDRadBvwyNk0i5i70rkRTLQOfbwuwhE",
      authDomain: "new-pets-7fc46.firebaseapp.com",
      databaseURL: "https://new-pets-7fc46.firebaseio.com",
      projectId: "new-pets-7fc46",
      storageBucket: "new-pets-7fc46.appspot.com",
      messagingSenderId: "352524888586",
      appId: "1:352524888586:web:a9a53cb128912dfb2a8df3",
      measurementId: "G-21WTT09TDF"
    })
  ],
  providers: [AngularFirestore, ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
