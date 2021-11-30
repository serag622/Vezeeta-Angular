import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Compontents/Contact-us/contact-us.component';
import { DoctorProfileComponent } from './Compontents/DoctorPage/doctor-profile/doctor-profile.component';
import { ElTa5sosComponent } from './Compontents/El-Ta5sos/el-ta5sos.component';
import { HomeComponent } from './Compontents/HomePage/home/home.component';
import { LoginComponent } from './Compontents/Login/login.component';
import { RegionComponent } from './Compontents/Region/Region/region.component';
import { RegisterComponent } from './Compontents/Register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',redirectTo:'',pathMatch:'full'},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'DoctorProfile/:id',component:DoctorProfileComponent},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'Region',component:RegionComponent},
  {path:'el-ta5sos',component:ElTa5sosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
