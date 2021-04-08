import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  car:Car;
  rental:Rental;
  constructor(
 
  ) { }



  ngOnInit(): void {

  }

  
  
}
