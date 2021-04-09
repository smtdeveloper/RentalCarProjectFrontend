import { ResponseModel } from "./ResponseModel";

export interface SingleResponseModel<T> extends ResponseModel{
    data:T
}