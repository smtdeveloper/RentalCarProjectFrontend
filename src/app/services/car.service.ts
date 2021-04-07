import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/ResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44379/api/" 


  constructor(private httpClient:HttpClient) { }

//buradamı gelmiyordu evet markaya tıklayınca ilgili ıd gelmiyor service kısmında sanırsam yanlıs var sen hatayı al bakalım nereden tamnam
//goole chrome da hatayı almamız lazım tamam hata Id nin null gelmesi tamam nasıl cözeceyiz bakalım tamam
  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetails";
   return this.httpClient.get<ListResponseModel<Car>>(newPath); 
    }

    getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
      let newPath = this.apiUrl + "cars/getbybrand?brandId="+brandId
      return this.httpClient.get<ListResponseModel<Car>>(newPath); 
       }
    
       getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
        let newPath = this.apiUrl + "cars/getbycolor?colorId="+colorId
        return this.httpClient.get<ListResponseModel<Car>>(newPath); 
         }

         getCarByBrandAndColor(brandId:Number,colorId:Number):Observable<ListResponseModel<Car>>{
          let newPath = this.apiUrl +`cars/getbybrandandcolor?brandId=${brandId}&colorid=${colorId}`;
          return this.httpClient.get<ListResponseModel<Car>>(newPath);
        }
        
        getCarDetailsByCarId(carId:number):Observable<ListResponseModel<Car>>{
          let newPath = this.apiUrl + "cars/getcardetail?carId="+carId;
          return this.httpClient.get<ListResponseModel<Car>>(newPath);
        }

        add(car:Car):Observable<ResponseModel>{
          return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
        }
       
}

 