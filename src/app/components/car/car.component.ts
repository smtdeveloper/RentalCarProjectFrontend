import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  car:Car[] = [];
 dataLoaded = false;

  constructor(private carSevice:CarService ,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
     
    this.activatedRoute.params.subscribe(params=>{

      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else{
        this.getCars()
      }
    })
 
  }
 
  getCars(){
    this.carSevice.getCars().subscribe(response => {
      this.car = response.data
      this.dataLoaded = true;
    } )
  }

  getCarsByBrand(brandId:number){
    this.carSevice.getCarsByBrand(brandId).subscribe(response => {
      this.car = response.data
      this.dataLoaded = true;
    } )
  }
}

