import { UserCredentialApi } from './../../shared/services/custom/UserCredential';
import { Routes } from '@angular/router';
import { DashboardPageComponent } from './../home-page/dashboard-page/dashboard-page.component';
import { Component, OnInit } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public username: any;
  public password: any;
  constructor(
  private router: Router,
  public userCredentialApi: UserCredentialApi,
  public authService: AuthService,

  ) { }

  ngOnInit() {
  }

     doLogin() {
        console.log(
        this.username,
        this.password);
        const data = {
          username: this.username,
          password: this.password
        };
        this.userCredentialApi.login(data)
          .subscribe(() => {
              console.log('sukses');
              this.authService.login().subscribe(() => {
              if (this.authService.isLoggedIn) {
              this.router.navigate(['/home']);
            }
            });
          }, (error) => {
              console.log('failed');
          });
   }


}
