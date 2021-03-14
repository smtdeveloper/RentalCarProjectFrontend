import { Color } from "./color";
import { ResponseModel } from "./ResponseModel";

export interface ColorsResponseModule extends ResponseModel{
    data:Color[]
}