import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorProfileComponent } from '../DoctorPage/doctor-profile/doctor-profile.component';
import { DoctorInformationComponent } from '../DoctorPage/doctor-information/doctor-information.component';
import { BookingInformationComponent } from '../DoctorPage/booking-information/booking-information.component';
import { DoctorCardComponent } from '../DoctorsPage/doctor-card/doctor-card.component';
import { DoctorsComponent } from '../DoctorsPage/doctors/doctors.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../Shared/shared/shared.module';




@NgModule({
  declarations: [
 DoctorProfileComponent,
 DoctorInformationComponent,
 BookingInformationComponent,
 DoctorCardComponent,
 DoctorsComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path:'',children:[
        {path:'Doctors',component:DoctorsComponent },
        {path:'DoctorProfile/:id',component:DoctorProfileComponent},
      ]}
    ]),

  ]
})
export class DoctorModule { }
