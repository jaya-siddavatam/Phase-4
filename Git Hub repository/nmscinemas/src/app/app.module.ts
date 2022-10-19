import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { ViewMoviedetailsComponent } from './view-moviedetails/view-moviedetails.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    ForgotpasswordComponent,
    HomepageComponent,
    HeaderComponent,
    AboutComponent,
    UserupdateComponent,
    ViewMoviedetailsComponent,
    AdminHomeComponent,
    MoviedetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }