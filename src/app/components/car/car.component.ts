import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';
//import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  dataLoaded =false;
  
  apiUrl="https://localhost:44379/"

  carImages : CarImage[] = [];
  currentImage : CarImage;
  
  

  constructor(

    private carService:CarService ,
    private activateRoute : ActivatedRoute ,
    private carImageService : CarimageService ,
   // private toastrService:ToastrService 

    ) { }

  ngOnInit(): void {
   this.activateRoute.params.subscribe(params =>{
if(params["brandId"]){
  this.getCarsByBrand(params["brandId"])
}else if(params["colorId"]){
  this.getCarsByColor(params["colorId"]);
}else{
  this.getCars()

}
   })

  }
getCars(){
this.carService.getCars().subscribe(response =>{
this.cars = response.data
this.dataLoaded = true;

}) 
}
getCarsByBrand(brandId : number){
  this.carService.getCarsByBrand(brandId).subscribe(response =>{
  this.cars = response.data
  this.dataLoaded = true;
  })
}
getCarsByColor(colorId : number){
  
  this.carService.getCarsByColor(colorId).subscribe(response =>{
  this.cars = response.data
  this.dataLoaded = true;
  })
}



getCarImages(carId:number){
  this.carImageService.getCarImages(carId).subscribe((response)=>{
    this.carImages = response.data;
  })
}

getCurrentImageClass(image:CarImage){
  if(image==this.carImages[0]){
    return "carousel-item active"
  } else {
    return "carousel-item"
  }
}
getButtonClass(image:CarImage){
  if(image==this.carImages[0]){
    return "active"
  } else {
    return ""
  }
}
rentOnClick(){
 // this.toastrService.info("Lütfen müşteri ve tarih seçin");
}

}