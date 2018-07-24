import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from 'src/app/survey/survey.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '/survey', component: SurveyComponent },
  { path: '/dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
