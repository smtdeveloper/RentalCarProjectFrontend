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
import { CustomerService } from 'src/app/services/customer.service';
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
  rentDate:Date;
  returnDate:Date;


  constructor(
    private rentalService:RentalService,
    private router: Router,
    private carService :CarService,
    private carImageService:CarimageService,
    private toastrService:ToastrService,
    private customerService:CustomerService
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

  getMinDate(){
    var today  = new Date();
   
    today.setDate(today.getDate() );
    return today.toISOString().slice(0,10)
  }


 

}

/* 

 getCustomers()
  {
    this.customerService.getCustomer().subscribe(response=>
      {
        this.customers=response.data
      })
  }

 getMinDate(){
    var today  = new Date();
    //min="1980-01-01"
    today.setDate(today.getDate() + 1);
    return today.toISOString().slice(0,10)
  }

  addRentals()
  {
    let rental:Rental = 
    {
      rentDate :this.rentDate,
      returnDate:this.returnDate,
      carId:this.car.carId,
      customerId: parseInt(this.customerId.toString())
    }
    this.route.navigate(['/payment/', JSON.stringify(rental)]);
    this.toastrService.info("Ödeme sayfasına yönlendiriliyorsunuz...", "Ödeme İşlemleri");
  }

*/