import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {


  user:User 
  userId:number;
  isAuthenticated:boolean

  constructor(
    private authService:AuthService,
    private toastrService:ToastrService,
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {


    if (this.checkIfLogin()) {
      this.getUserByEmail();
      console.log("True")
      this.getUserId();
    
    }
  }


  checkIfLogin(){
    if (this.authService.isAuthenticated()) {
      return true
    }else{
      return false
    }
  }

  getUserId(){
    this.userId =  this.userService.getUserId()
   }
 
   getUserByEmail() {
     console.log("Çalıştı ")
     this.userService.getByMail(localStorage.getItem("email")).subscribe((response) => {
       this.user = response.data;
       console.log(this.user)
     });
   }
  

   logOut(){
    this.authService.logOut();
    this.toastrService.info("Başarılı  Çıkış Yapıldı")
    this.router.navigate([""])    
  }

}
