import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';
@Injectable({
  providedIn: 'root'
})
export class brandService {

  apiUrl = "https://localhost:44379/api/brands/getall"
  constructor(private httpClient:HttpClient) { }


  getCars():Observable<BrandResponseModel>{
   return this.httpClient.get<BrandResponseModel>(this.apiUrl);
    
  }
}
