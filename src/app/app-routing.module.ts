import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Compontents/contact-us/contact-us.component';

import { ElTa5sosComponent } from './Compontents/El-Ta5sos/el-ta5sos.component';
import { HomeComponent } from './Compontents/HomePage/home/home.component';
import { InsuranceComponent } from './Compontents/insurance/insurance/insurance.component';
import { LoginComponent } from './Compontents/Login/login.component';
import { RegionComponent } from './Compontents/Region/Region/region.component';
import { RegisterComponent } from './Compontents/Register/register.component';

import { ReservationComponent } from './Compontents/reservation/reservation.component';
import { AllReservationComponent } from './Compontents/all-reservation/all-reservation.component';
import{AuthguardGuard} from './services/authguard.guard'
import { NotUserGurdGuard } from './services/not-user-gurd.guard';
import { DoctorGuard } from './services/doctor.guard';


const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'home',redirectTo:'',pathMatch:'full'},
  {path:'Login',component:LoginComponent ,canActivate :[AuthguardGuard]},
  {path:'Register',component:RegisterComponent , canActivate :[AuthguardGuard]},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'Region',component:RegionComponent},
  {path:'el-ta5sos',component:ElTa5sosComponent},
  {path:"insurances",component:InsuranceComponent},
  {path:'Reservation/:id',component:ReservationComponent , canActivate:[NotUserGurdGuard]},
  {path:'AllReservations/:name',component:AllReservationComponent , canActivate:[NotUserGurdGuard]},
  {path:'DoctorReservations/:name',component:AllReservationComponent , canActivate:[DoctorGuard]},
  {path:'',loadChildren:()=>import('./Compontents/Doctors/doctor/doctor.module').then(m=>m.DoctorModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top',preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
