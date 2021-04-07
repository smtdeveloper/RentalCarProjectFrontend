import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  car:Car;
  constructor(
 
  ) { }



  ngOnInit(): void {
  }

  
}
