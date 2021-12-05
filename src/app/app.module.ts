import { NgModule, Query } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { NavBarComponent } from './Compontents/Layout/nav-bar/nav-bar.component'
import { FooterComponent } from './Compontents/Layout/footer/footer.component';
import { LoginComponent } from './Compontents/Login/login.component';
import { RegisterComponent } from './Compontents/Register/register.component';
import { ElTa5sosComponent } from './Compontents/El-Ta5sos/el-ta5sos.component';
import { FormsModule } from '@angular/forms';
import { RegionComponent } from './Compontents/region/Region/region.component'
import { HomeComponent } from './Compontents/HomePage/home/home.component';
import { HomeHeaderComponent } from './Compontents/HomePage/home-header/home-header.component';
import { HeadingComponent } from './Compontents/Shared/heading/heading.component';
import { DoctorProfileComponent } from './Compontents/DoctorPage/doctor-profile/doctor-profile.component';
import { DoctorInformationComponent } from './Compontents/DoctorPage/doctor-information/doctor-information.component';
import { BookingInformationComponent } from './Compontents/DoctorPage/booking-information/booking-information.component';
import { SearchBarComponent } from './Compontents/Shared/search-bar/search-bar.component';
import { RegionDetailsComponent } from './Compontents/region/Region-Details/region-details.component';
import { ColumnDataComponent } from './Compontents/region/Column-Data/column-data.component';
import { ContactUsComponent } from './Compontents/Contact-US/contact-us.component';
import { environment } from 'src/environments/environment';
import { InsuranceComponent } from './Compontents/insurance/insurance/insurance.component';
import { InsuranceColumnDataComponent } from './Compontents/insurance/insurance-column-data/insurance-column-data.component';

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
    RegionDetailsComponent,
    ColumnDataComponent,
    HomeComponent,
    HomeHeaderComponent,
    HeadingComponent,
    DoctorProfileComponent,
    DoctorInformationComponent,
    BookingInformationComponent,
    SearchBarComponent,
    InsuranceComponent,
    InsuranceColumnDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // fir
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }