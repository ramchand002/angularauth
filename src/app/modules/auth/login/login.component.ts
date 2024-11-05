import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  returnUrl: string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) {

    this.returnUrl =
      this.activatedRoute.snapshot.queryParamMap.get('returnUrl') ||
      `/admin/dashboard`;
   }

  ngOnInit(): void {
  }

  //set token in local storage
  setToken() {
    let token = "test";
    localStorage.setItem('token', token);
    this.router.navigate([this.returnUrl]);
  }

  //remove token from local storage
  removeToken() {
    localStorage.removeItem('token');
  }

  //
  login() {
    debugger
   let obj = {
    "UserNameOrEmailAddress":"PCFINANCIAL",
    "password":"Mc@1234#",
    "twoFactorVerificationCode":null,
    "rememberClient":false,
    "twoFactorRememberClientToken":null,
    "singleSignIn":null,
    "returnUrl":null
   }
   this.loginService.login(obj).subscribe((res: any) => {
    debugger
    console.log(res);
    this.setToken();
   }, (err) => {
     debugger
     console.log(err);
   })
     
  }

}
