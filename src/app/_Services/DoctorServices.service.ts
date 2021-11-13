import { Doctor } from "../_Model/Doctor.model";

export class DocdorService {

  Doctors : Doctor[]=[{id: 1, name: "Ahmed Moahmed"}];

  getAllDoctors(){
    return this.Doctors
  }

  getDoctorByID( id: number ){

  }

  getDoctorBy( str : string ){

  }


}
