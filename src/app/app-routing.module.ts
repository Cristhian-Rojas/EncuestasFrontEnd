import { PollsComponent } from './components/polls/polls.component';
import { UserGuardGuard } from './guard/user-guard.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'polls', component: PollsComponent, canActivate: [UserGuardGuard]},
  {path: 'home', component: HomeComponent, canActivate: [UserGuardGuard]},
  {path: 'navbar', component: NavbarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
