import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ColorsResponseModule } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl ='https://localhost:44379/api/colors/getall'
  constructor(private httpClient:HttpClient  ) { }

  getColors():Observable<ColorsResponseModule>{
    return this.httpClient.get<ColorsResponseModule>(this.apiUrl)
  }


}
