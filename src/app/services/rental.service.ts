import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';


@Injectable({
  providedIn: 'root' 
})
export class RentalService {


  apiUrl='https://localhost:44379/api/'

  constructor(private httpClient:HttpClient) { }

  getRental():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl)
  }


  getRentalByCarId(carId : number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + 'rentals/getrentaldetailbycarId?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  
  addRental(rental:Rental){
    let newPath = this.apiUrl + 'rentals/add'
    this.httpClient.post(newPath,rental).subscribe()
  }


  getCustomer():Observable<ListResponseModel<Customer>>{
    let apiUrl="https://localhost:44315/api/customers/getall"
    return this.httpClient.get<ListResponseModel<Customer>>(apiUrl);
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetail?carId="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  //payRental(rental:Rental, amount:number){
  //  let newPath = this.apiUrl + 'rentals/add';
 //  return this.httpClient.post<ResponseModel>(newPath,{payment:{amount:amount},rental:{rental}})
 //  }


}
