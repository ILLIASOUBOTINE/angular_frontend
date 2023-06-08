import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  isOpenFormSignIn: boolean = false;
  isMessageErrorSignIn = false;
  messageSuccess:string = '';
  messageError: string = '';

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router){}

  signInForm = this.fb.group({
    name: ['',[Validators.required, Validators.pattern('.{2,255}')]],
    email: ['',[Validators.required, Validators.email, Validators.pattern('.{2,255}')]],
    password: ['',[Validators.required, Validators.pattern('.{6,}')]]
  });

  ngOnInit(): void {
    // this.authService.login("test2@gmail.com", "12345678").subscribe(((response)=>{
    //   console.log(response);
    // }))
  }

  onIsOpenForm(){
    this.isOpenFormSignIn = !this.isOpenFormSignIn;
  }

  onSubmit(){
    this.messageError = '';
    this.messageSuccess = '';
    console.log(this.signInForm.value);
    this.authService.register(this.signInForm.value.name, this.signInForm.value.email, this.signInForm.value.password).subscribe({
      next: (response)=>{
        console.log(response);
        if (response['status']) {
          this.messageSuccess = response['message'];
        } else {
          this.messageError = response['message'];
        }
      },
      error: (error)=>{
        console.log(error);
        this.isMessageErrorSignIn = true;
      }
    });
  }
}
