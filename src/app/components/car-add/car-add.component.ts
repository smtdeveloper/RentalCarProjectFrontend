import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm : FormGroup

  constructor( 
    private formBuilder:FormBuilder
     ) { }

  ngOnInit(): void {
  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      name:["" ,Validators.required],
      brandName:["" ,Validators.required],
      colorName:["" ,Validators.required],
      modelYear:["" ,Validators.required],
      dailyPrice:["" ,Validators.required],
      description:["" ,Validators.required],
      imagePath:["" ,Validators.required]
    })
  }
}
