import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashComponent } from './admin/admin-dash/admin-dash.component';
import { UserDashComponent } from './user/user-dash/user-dash.component';
import { BookMovieComponent } from './user/book-movie/book-movie.component';
import { RouteGuardAdminService } from './routeGuard/route-guard-user.service';
import { RouteGuardUserService } from './routeGuard/route-guard-admin.service';
import { BookingHistoryComponent } from './user/booking-history/booking-history.component';
import { ForgetPasswordComponent } from './utilities/forget-password/forget-password.component';

const routes: Routes = [
  {
     path : "" , component : LoginComponent ,
  },

  {
    path : "register" , component : RegisterComponent
  },
  {
    path : "user" ,  component : UserDashComponent , canActivate : [RouteGuardUserService] 
  } ,
  {
    path : "admin" , component :  AdminDashComponent , canActivate : [RouteGuardAdminService] 
  },
  {
    path : "book/:id" , component : BookMovieComponent , canActivate : [RouteGuardUserService]
  },
  {
    path : "user/bookings" , component : BookingHistoryComponent  ,canActivate : [RouteGuardUserService] 
  },
  {
    path : "forget-password" , component : ForgetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
