import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Layout/nav-bar/nav-bar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { ContactUsComponent } from './Compontents/contact-us/contact-us.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { RegionComponent } from './Compontents/region/region.component';
import { RegionDetailsComponent } from './Compontents/region-details/region-details.component';
import { ColumnDataComponent } from './Compontents/column-data/column-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ContactUsComponent,
    SearchBarComponent,
    RegionComponent,
    RegionDetailsComponent,
    ColumnDataComponent
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
