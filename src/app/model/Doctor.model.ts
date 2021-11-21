import { Category } from "./Category.model";
import { City } from "./City.model";

export interface Doctor{
  id?: number;
  name?: string;
  city?: City;
  category?: Category;
  img?: string;
}
