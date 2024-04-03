import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component' ;
import { CourierComponent } from './courier/courier.component';
import { TrackComponent } from './track/track.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'courier', component: CourierComponent },
  { path: 'track', component: TrackComponent },
  { path: 'about',component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'loginpage',component: LoginpageComponent},
  { path: 'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }