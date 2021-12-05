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
  Doctor !: Doctor | any;
  DocObserable !: Subscription;


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute , private ds : DocdorService) { }

  ngOnInit(): void {
    const Doctorid = this.activatedRoute.snapshot.params.id;

    console.log(Doctorid)
    this.DocObserable = this.ds.getDoctorByID(Doctorid).subscribe(Doctor => {
      this.Doctor =Doctor;
      console.log(Doctor)
    })

  }

  ngOnDestroy(): void {
  this.DocObserable.unsubscribe();
  }

}
