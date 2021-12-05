import { Category } from "./Category.model";
export interface CategoryItems{
    namear?:String,
    nameen?:String,
    id:number,
    category:Category[],
    imgsUrl:String[]
}