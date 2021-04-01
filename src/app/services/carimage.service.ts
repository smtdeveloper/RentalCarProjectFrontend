import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl ='https://localhost:44379/api/carimages/getall'
  constructor(private httpClient:HttpClient) { }

  getCar():Observable<ListResponseModel<CarImage>>{
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl)
  }

  
  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getimagesbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
}

}