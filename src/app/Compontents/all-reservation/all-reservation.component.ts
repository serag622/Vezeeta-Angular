import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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

  constructor( private rs : ReservationService , private activatedRoute : ActivatedRoute) { }

  ngOnDestroy(): void {

    this.ResSubscribe.unsubscribe()
  }

  ngOnInit(): void {

    const name = this.activatedRoute.snapshot.params.user
    console.log(name)

    this.ResSubscribe = this.rs.GetAllReservationsofUser(name).subscribe(res =>{
      this.Reservations = res;
    })




  }

}



