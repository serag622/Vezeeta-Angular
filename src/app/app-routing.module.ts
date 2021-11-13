import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Compontents/contact-us/contact-us.component';
import { RegionComponent } from './Compontents/region/region.component';

const routes: Routes = [
  {path:"contactUS",component:ContactUsComponent},
  {path:"region",component:RegionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
