import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
@Injectable({
  providedIn: 'root'
})
export class brandService {

  apiUrl = "https://localhost:44379/api/brands/getall"
  constructor(private httpClient:HttpClient) { }


  getCars():Observable<ListResponseModel<Brand>>{
   return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
    
  }
}
