import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/model/Doctor.model';
import { DocdorService } from 'src/app/services/DoctorServices.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit,OnDestroy {

  Doctor :Doctor | any
  DocObserable !: Subscription;

  date : Date=new Date();
  techSpecMeta!: { make: string; };


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute , private ds : DocdorService) { }


  ngOnInit(): void {

    this.techSpecMeta= {make: ""};

    const Doctorid = this.activatedRoute.snapshot.params.id;

    this.DocObserable = this.ds.getDoctorByID(Doctorid).subscribe(doctor => {
      this.Doctor =doctor;
    })

    // this.date.setDate(this.date.getDay()+2)


  }

  ngOnDestroy(): void {
  this.DocObserable.unsubscribe();
  }

}
