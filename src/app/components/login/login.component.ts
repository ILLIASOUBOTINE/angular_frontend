import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent implements OnInit {
  isOpenFormLogin: boolean = false;
  isMessageErrorLogin = false;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router){}

  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email, Validators.pattern('.{1,255}')]],
    password: ['',[Validators.required, Validators.pattern('.{6,}')]]
  });

  ngOnInit(): void {
    // this.authService.login("test2@gmail.com", "12345678").subscribe(((response)=>{
    //   console.log(response);
    // }))
  }

  onIsOpenFormLogin(){
    this.isOpenFormLogin = !this.isOpenFormLogin;
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (response)=>{
        // console.log(response);
        console.log(response['access_token']);
        localStorage.setItem('access_token', response['access_token']);
        this.authService.isAuth.next(true);
        this.authService.access_token.next(response['access_token']);
        this.authService.controlTokenExpiration();
        this.router.navigate(["/account"]);
      },
      error: (error)=>{
        // console.log(error);
        this.isMessageErrorLogin = true;
      }
    });
  }
}
