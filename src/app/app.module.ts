import { NgModule } from '@angular/core';
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

import { SearchBarComponent } from './Compontents/Shared/search-bar/search-bar.component';

import { RegionDetailsComponent } from './Compontents/Region/Region-Details/region-details.component';
import { ColumnDataComponent } from './Compontents/Region/Column-Data/column-data.component';
import { InsuranceComponent } from './Compontents/insurance/insurance/insurance.component';
import { InsuranceColumnDataComponent } from './Compontents/insurance/insurance-column-data/insurance-column-data.component';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservationComponent } from './Compontents/reservation/reservation.component';
import { AllReservationComponent } from './Compontents/all-reservation/all-reservation.component';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { SharedModule } from './Compontents/Shared/shared/shared.module';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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

    SearchBarComponent,
    InsuranceComponent,
    InsuranceColumnDataComponent,

    ReservationComponent,
    AllReservationComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      },
      defaultLanguage:"ar"
  }),
  SharedModule,

  ],

  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
