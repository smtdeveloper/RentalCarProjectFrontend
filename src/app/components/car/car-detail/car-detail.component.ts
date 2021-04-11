import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { User } from 'src/app/models/user';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {


  car:Car;
  carImages : CarImage[] = [];
  apiUrl="https://localhost:44379/"
  currentImage : CarImage;
  
  

user:User

  constructor(  
    private carService: CarService,
    private carImageService : CarimageService,
    private activatedRoute :ActivatedRoute,
    private toastrService:ToastrService,
    private router:Router,
    private userService:UserService
    ) { }

  ngOnInit(): void {
    this.getUserByEmail();
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailsByCarId(params["carId"]);
        this.getCarImages(params["carId"]);
      }
    })
   
  }
  getUserByEmail(){
    this.userService.getByMail(localStorage.getItem("email")).subscribe((response)=>{this.user=response.data})
  }
  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.car = response.data[0];
      console.log(response.data)
    });
  }

  getCarImages(carId:number){
    this.carImageService.getCarImages(carId).subscribe((response)=>{
      this.carImages = response.data;
      console.log(response.data)
    })
  }



  getCurrentImageClass(image:CarImage ){
    if(image==this.carImages[0]){
      return "carousel-item active"
    } else {
      return "carousel-item"
    }
  }

  addRental(id:number){
    this.toastrService.info( "Kiralama sayfasına yönlendiriliyorsunuz " , "  SMTcoder" ) 
  }

  addRental2(id:number){

    this.toastrService.info("Kiralama Sayfasına Yönlendiriliyorsunuz" , "SMTcoder")
    this.router.navigate(["rentals/",id]);
}

}