import { Category } from "./Category.model";
import { City } from "./City.model";

export interface Doctor{
  id?:string
  name?: string;
  degree?:string;
  location?: location;
  category?: category;
  imgDoctor?: string;
  price?: number;
  waiting?: number;
  mobile?: number;
  imgsClinic?:string[],
  clinicTime :clinicTime,
  genders?: string

}

interface category{
  name?: string;
  subCategory?: string;
}

export interface location{
  city?: string;
  region?:string;
}

interface clinicTime{
  start: number;
  end: number;
}
