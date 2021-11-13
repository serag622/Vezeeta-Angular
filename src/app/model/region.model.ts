import { RegionDetails } from "./regionDetails.model";
export interface Region{
    id?:number;
    name:string;
    regionDetails:RegionDetails[]; 
}