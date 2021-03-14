import { Brand } from "./brand";
import { ResponseModel } from "./ResponseModel";


export interface BrandResponseModel extends ResponseModel{
    data:Brand[]
}