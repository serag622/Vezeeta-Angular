import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/model/Doctor.model';
import { Reservation } from 'src/app/model/Reservation.model';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-all-reservation',
  templateUrl: './all-reservation.component.html',
  styleUrls: ['./all-reservation.component.css']
})
export class AllReservationComponent implements OnInit,OnDestroy {

  Reservations !: Reservation[] | any
  ResSubscribe !: Subscription
  User:Doctor | any =JSON.parse(localStorage.getItem('User') as string)

  constructor( private rs : ReservationService , private activatedRoute : ActivatedRoute) { }

  ngOnDestroy(): void {

    this.ResSubscribe.unsubscribe()
  }

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.params.name
    const path = this.activatedRoute.snapshot.url[0].path
     console.log(path)
    if(path == "AllReservations"){
    console.log(name)
    this.ResSubscribe = this.rs.GetAllReservationsofUser(name).subscribe(res =>{
      this.Reservations = res;
    })
  }
  else if(path == "DoctorReservations")
  {
    console.log(name)
    this.ResSubscribe = this.rs.GetAllReservationofDoctor(name).subscribe(res =>{
      this.Reservations = res;
    })
  }



  }

}



