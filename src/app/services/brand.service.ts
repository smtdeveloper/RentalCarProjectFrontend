import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/ResponseModel';
import { ItemResponseModel } from '../models/itemResponseModel';
@Injectable({
  providedIn: 'root'
})
export class brandService {

  apiUrl = "https://localhost:44379/api/brands/"
  constructor(private httpClient:HttpClient) { }


  getCars():Observable<ListResponseModel<Brand>>{
   return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl + "getall" );
    
  }


  add(brand : Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl +"add",brand)
  }

  getById(brandId : number):Observable<ItemResponseModel<Brand>>{
    let newPath = this.apiUrl + "brandid?id=" + brandId;
    return this.httpClient.get<ItemResponseModel<Brand>>(newPath);
  }
  update(brand : Brand) : Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "update";
    return this.httpClient.post<ListResponseModel<Brand>>(newPath,brand);
  }
  delete(brand : Brand):Observable<ItemResponseModel<Brand>>{
    let newPath = this.apiUrl + "delete";
    return this.httpClient.post<ItemResponseModel<Brand>>(newPath,brand);

  }
}
