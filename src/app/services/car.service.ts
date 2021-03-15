import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { carResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44379/api/cars/getcardetail" 


  constructor(private httpClient:HttpClient) { }


  getCars():Observable<carResponseModel>{
   return this.httpClient.get<carResponseModel>(this.apiUrl);
    
  }
}
