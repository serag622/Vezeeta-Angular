import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Reservation } from 'src/app/model/Reservation.model';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit,OnDestroy {

  Reservation !: Reservation |any;
  subscribe !: Subscription;
  techSpecMeta !: { make: string; } ;

  constructor(private rs: ReservationService, private activatedRoute: ActivatedRoute, private router : Router) { }




  ngOnInit(): void {

    this.techSpecMeta= {make: ""};
    const id = this.activatedRoute.snapshot.params.id;

    this.subscribe = this.rs.getReservationoById(id).subscribe(res =>{
      console.log(res)
      this.Reservation = res
    })

  }

  ngOnDestroy() : void {
    this.subscribe.unsubscribe()
  }

  deleteReservation(){
    this.rs.deleteReservationoById(this.Reservation.id).then(() =>{
      this.router.navigate(['/'])

    })
  }

}
