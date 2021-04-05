import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({ 
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rental : Rental[] = [];
  car:Car;
  carImages : CarImage[] = [];
  apiUrl="https://localhost:44379/"
  currentImage : CarImage;


  constructor(
    private rentalService:RentalService,
    private router: Router,
    private carService :CarService,
    private carImageService:CarimageService
    ) { }


  ngOnInit(): void {

   this.getRentals();
  }

  getRentals(){
    this.rentalService.getRental().subscribe(response => {
      this.rental = response.data
    })
  }

  getCurrentImageClass(image:CarImage ){
    if(image==this.carImages[0]){
      return "carousel-item active"
    } else {
      return "carousel-item"
    }
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

}
