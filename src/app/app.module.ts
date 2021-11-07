import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Layout/nav-bar/nav-bar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeadingComponent } from './Body/heading/heading.component';
import { DoctorProfileComponent } from './Body/doctor-profile/doctor-profile.component';
import { DoctorInformationComponent } from './Body/doctor-information/doctor-information.component';
import { BookingInformationComponent } from './Body/booking-information/booking-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HeadingComponent,
    DoctorProfileComponent,
    DoctorInformationComponent,
    BookingInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
