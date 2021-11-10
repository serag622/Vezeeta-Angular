import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  valid:Boolean=false;
  validEmpty:Boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  submit(form: NgForm) {

  }
  validateEmail(emailInput:NgModel){
     var email = emailInput.value;
    var emailreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    this.valid= emailreg.test(email);
    console.log("aaaa")
    if(emailInput.value!=""){
      this.validEmpty=false;
    }
  }

}
