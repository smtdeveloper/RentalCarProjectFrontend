import { Rental } from "./rental";
import { ResponseModel } from "./ResponseModel";

export interface RentalResponseModel extends ResponseModel{

    data:Rental[]
    
}