import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AboutComponent } from './about/about.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewMoviedetailsComponent } from './view-moviedetails/view-moviedetails.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
const routes: Routes = [
  {path:"updateprofile",component:UserupdateComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"login",component:LoginComponent},
  {path:"adminHome",component:AdmindashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"userHome",component:UserdashboardComponent},
  {path:"updatepwd",component:ForgotpasswordComponent},
  {path:"signUp",component:SignupComponent},
  {path:"home",component:AdminHomeComponent},
  {path:"view",component:ViewMoviedetailsComponent},
  {path:"apply",component:MoviedetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }