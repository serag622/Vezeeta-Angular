import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Layout/nav-bar/nav-bar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { LoginComponent } from './body/login/login.component';
import { RegisterComponent } from './body/register/register.component';
import { ElTa5sosComponent } from './body/el-ta5sos/el-ta5sos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ElTa5sosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
