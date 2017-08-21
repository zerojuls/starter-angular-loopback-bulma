import { CrudPageComponent } from './home-page/crud-page/crud-page.component';
import { MapsPageComponent } from './maps-page/maps-page.component';
import { HighchartsPageComponent } from './home-page/chart-page/highcharts-page/highcharts-page.component';
import { GoogleChartPageComponent } from './home-page/chart-page/google-chart-page/google-chart-page.component';
import { Ng2chartPageComponent } from './home-page/chart-page/ng2chart-page/ng2chart-page.component';
import { ChartPageComponent } from './home-page/chart-page/chart-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AuthGuard } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardPageComponent } from './home-page/dashboard-page/dashboard-page.component';
import { FileUploadPageComponent } from './file-upload-page/file-upload-page.component';
import { ChatPageComponent } from './home-page/chat-page/chat-page.component';
import { ChatRoomPageComponent } from './home-page/chat-room-page/chat-room-page.component';

const routes: Routes = [
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'signup', component: SignupPageComponent
  },
  {
    path: 'home', component: HomePageComponent, canActivate: [AuthGuard], children: [
      { path: '', component: DashboardPageComponent },
      { path: 'dashboard', redirectTo: '', pathMatch: 'full' },
      { path: 'maps', component: MapsPageComponent},
      { path: 'chart', component: ChartPageComponent, children: [
          { path: '', redirectTo: 'ng2chart', pathMatch: 'full' },
          { path: 'ng2chart', component: Ng2chartPageComponent },
          { path: 'google-chart', component: GoogleChartPageComponent },
          { path: 'highcharts', component: HighchartsPageComponent },
          { path: '**', redirectTo: 'ng2chart' }
        ]
      },
      {
        path: 'chat', component: ChatPageComponent, children: [
          { path: 'chatroom/:id', component: ChatRoomPageComponent }
        ]
      },
      { path: 'crud', component: CrudPageComponent },
    ]
  },
  {
    path: 'fileupload', component: FileUploadPageComponent
  },
  { path: '', component: LoginPageComponent },
  { path: '**', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
