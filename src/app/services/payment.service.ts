import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl="https://localhost:44379/api";
  constructor(private httpClient:HttpClient) { }

  pay(rental:Rental,amount:number){
    let path = this.apiUrl + "rentals/paymentadd";
    this.httpClient.post<ResponseModel>(path,{payment:{amount:amount},rental:rental});

  }
}
