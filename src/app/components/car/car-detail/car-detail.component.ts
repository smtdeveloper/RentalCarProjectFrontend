import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';


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
  
  



  constructor(  
    private carService: CarService,
    private carImageService : CarimageService,
    private activatedRoute :ActivatedRoute,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailsByCarId(params["carId"]);
        this.getCarImages(params["carId"]);
      }
    })
   
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

  addRental(carImage:CarImage){
    this.toastrService.success(" Araba Kiralandı" , "  Başarılı" ) 
  }
}