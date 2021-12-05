import { NgModule, Query } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Compontents/Layout/nav-bar/nav-bar.component';
import { FooterComponent } from './Compontents/Layout/footer/footer.component';
import { LoginComponent } from './Compontents/Login/login.component';
import { RegisterComponent } from './Compontents/Register/register.component';
import { ElTa5sosComponent } from './Compontents/El-Ta5sos/el-ta5sos.component';
import { ContactUsComponent } from './Compontents/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { RegionComponent } from './Compontents/Region/Region/region.component'
import { HomeComponent } from './Compontents/HomePage/home/home.component';
import { HomeHeaderComponent } from './Compontents/HomePage/home-header/home-header.component';
import { HeadingComponent } from './Compontents/Shared/heading/heading.component';
import { DoctorProfileComponent } from './Compontents/DoctorPage/doctor-profile/doctor-profile.component';
import { DoctorInformationComponent } from './Compontents/DoctorPage/doctor-information/doctor-information.component';
import { BookingInformationComponent } from './Compontents/DoctorPage/booking-information/booking-information.component';
import { SearchBarComponent } from './Compontents/Shared/search-bar/search-bar.component';
import { RegionDetailsComponent } from './Compontents/Region/Region-Details/region-details.component';
import { ColumnDataComponent } from './Compontents/Region/Column-Data/column-data.component';
import { InsuranceComponent } from './Compontents/insurance/insurance/insurance.component';
import { InsuranceColumnDataComponent } from './Compontents/insurance/insurance-column-data/insurance-column-data.component';
import { DoctorsComponent } from './Compontents/DoctorsPage/doctors/doctors.component';
import { DoctorCardComponent } from './Compontents/DoctorsPage/doctor-card/doctor-card.component';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ElTa5sosComponent,
    ContactUsComponent,
    RegionComponent,
    ColumnDataComponent,
    RegionDetailsComponent,
    HomeComponent,
    HomeHeaderComponent,
    HeadingComponent,
    DoctorProfileComponent,
    DoctorInformationComponent,
    BookingInformationComponent,
    SearchBarComponent,
    InsuranceComponent,
    InsuranceColumnDataComponent,
    DoctorsComponent,
    DoctorCardComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
