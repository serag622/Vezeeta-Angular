import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Layout/nav-bar/nav-bar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { LoginComponent } from './body/login/login.component';
import { RegisterComponent } from './body/register/register.component';
import { ElTa5sosComponent } from './body/el-ta5sos/el-ta5sos.component';
import { ContactUsComponent } from './Compontents/contact-us/contact-us.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { RegionComponent } from './Compontents/region/region.component';
import { RegionDetailsComponent } from './Compontents/region-details/region-details.component';
import { ColumnDataComponent } from './Compontents/column-data/column-data.component';
import { HomeComponent } from './HomePage/home/home.component';
import { HomeHeaderComponent } from './HomePage/home-header/home-header.component';
import { HeadingComponent } from './Body/heading/heading.component';
import { DoctorProfileComponent } from './Body/doctor-profile/doctor-profile.component';
import { DoctorInformationComponent } from './Body/doctor-information/doctor-information.component';
import { BookingInformationComponent } from './Body/booking-information/booking-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ElTa5sosComponent
    ContactUsComponent,
    SearchBarComponent,
    RegionComponent,
    RegionDetailsComponent,
    ColumnDataComponent,
    HomeComponent,
    HomeHeaderComponent
    HeadingComponent,
    DoctorProfileComponent,
    DoctorInformationComponent,
    BookingInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
