import { Car } from "./car";
import { ResponseModel } from "./ResponseModel";

export interface carResponseModel extends ResponseModel{
    data:Car[]
}