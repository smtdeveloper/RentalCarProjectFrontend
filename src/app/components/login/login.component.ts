import { Component, OnInit } from '@angular/core';
import {  FormGroup , FormBuilder , Validators, FormControl  } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  registerForm:FormGroup;
  
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,
    private router:Router

    ) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.createRegisterForm();
  }

  createLoginForm(){

    this.loginForm = this.formBuilder.group({
      email:["", Validators.required],
      password:["", Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Başarılı giriş")
        localStorage.setItem("token",response.data.token)
      },responseError=>{
        console.log(responseError)
        this.toastrService.error(responseError.error)
      })
    }
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register(){
    if (this.registerForm.valid) {
      let registerModel = Object.assign({}, this.registerForm.value);
      this.authService.register(registerModel).subscribe(
        (response) => {
          this.toastrService.success("Başarılı " , "Kayıt Olundu");


          this.router.navigate(['login']);
        },
        (responseError) => {
          console.log(responseError.error.messages);
          this.toastrService.error(" Mevcut Kullanıcı ");
        }
      );
    }

  }

}
