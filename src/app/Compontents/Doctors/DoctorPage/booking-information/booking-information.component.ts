import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/Doctor.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/model/Users';
import { ReservationService } from 'src/app/services/reservation.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-booking-information',
  templateUrl: './booking-information.component.html',
  styleUrls: ['./booking-information.component.css']
})
export class BookingInformationComponent implements OnInit,OnDestroy {

  @Input() doctor !:Doctor | any
  closeResult = '';
  today : Date = new Date()
  tomorrow : Date = new Date(this.today)
  Atomorrow : Date = new Date(this.today)

  canBook:boolean = true;
  // isUser !: boolean;
  userSubscription !: Subscription

  dates!: [] | any
  User !: User |any


  constructor(private modalService: NgbModal, private as: AuthService, private us: UsersService, private rs:ReservationService, private router: Router) {
    this.tomorrow.setDate(this.tomorrow.getDate()+1)
    this.Atomorrow.setDate(this.Atomorrow.getDate()+2)
   }

  ngOnDestroy(): void {
    if(this.User){
    this.userSubscription.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.dates=[{ day: this.today.toDateString(),bookhour: 0},{  day: this.tomorrow.toDateString(), bookhour: 0 }, { day: this.Atomorrow.toDateString(), bookhour: 0 }]

    // this.as.user.subscribe(user => {
    //   if (user) {
    //     console.log(user)
    //     this.isUser = true
    //     this.as.userId = user.uid
    //     this.us.getUser(user.uid).subscribe(res => {
    //       this.User=res
    //       console.log(this.User)
    //     })
    //   }
    //   else this.isUser = false;
    // })

    // const user = JSON.parse(localStorage.getItem('User') as string)
    //  if(user){
    //   this.isUser = true
    //     this.userSubscription = this.us.getUser(user.uid).subscribe(user => {
    //       this.User = user
    //     })
    //  }
    //  else{
    //    this.isUser = false
    //  }
    this.userSubscription = this.as.User.subscribe(user => {
      this.User = user
    })



  }

  open(content: any,date: any) {

  //  console.log(this.isUser)

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.rs.GetReservationofDay(this.doctor.name,date.day).then((reservation) => {

      if(reservation.docs.length < (this.doctor.clinicTime.end - this.doctor.clinicTime.start)){
         date.bookhour = reservation.docs.length + this.doctor.clinicTime.start;
         this.canBook=true;
       }
      else{
         this.canBook=false;
       }
    })

  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  book(date:any){
    this.modalService.dismissAll('close')

    this.rs.AddReservation(this.doctor.name,this.doctor.location,
      this.doctor.mobile,date.day,this.doctor.price,date.bookhour,this.User.name,
      this.User.email,this.User.phone).then(reservation =>{
        console.log(reservation)

        this.router.navigate(['/Reservation',reservation.id])
      })
  }



}


