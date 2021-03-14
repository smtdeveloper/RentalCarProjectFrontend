import { Customer } from "./customer";
import { ResponseModel } from "./ResponseModel";

 // extends c# karsılığı : dır.
export interface CustomerResponseModel extends ResponseModel{
    data:Customer[]
}