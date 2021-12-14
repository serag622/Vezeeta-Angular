import { location } from "./Doctor.model";

export interface Reservation{
  id: string;
  doctorName: string;
  doctorLocation: location;
  doctorPhone: number;
  bookDate :string;
  price: number;
  bookhour:number;
  userName: string;
  userEmail: string;
  userPhone: string;
  isCancelled: boolean;
}
