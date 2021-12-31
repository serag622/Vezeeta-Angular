import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryItems } from 'src/app/model/CategoryItems.model';
import { Doctor } from 'src/app/model/Doctor.model';
import { CategoryService } from 'src/app/services/category.service';
import { DocdorService } from 'src/app/services/DoctorServices.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit,OnDestroy {

  Doctors: Doctor[] | any  = [];
  category:CategoryItems | any=[]

  DocObserable !: Subscription;
  CatObserable !: Subscription;

  pageSize :number = 8;
  noOpages :number[]=[] ;
  DoctorsViewed :Doctor[] = [];
  currentPage :number = 0;

  // @ViewChildren('input') inputElems: QueryList<HTMLInputElement> | undefined;

  constructor(private ds:DocdorService , private cs: CategoryService) {}

  ngOnInit(): void {
    this.DocObserable = this.ds.getAllDoctors().subscribe(data => {
      this.Doctors=data
      this.paging()
      this.sliceArray()
    })

    this.CatObserable=this.cs.getAllCategories().subscribe(data => {
      this.category=data;
    })

  }

  ngOnDestroy() : void {
    this.DocObserable.unsubscribe();
    this.CatObserable.unsubscribe();
  }

  paging(){
    this.noOpages=[]
    const numberOfPages =Math.ceil(this.Doctors.length/this.pageSize);
    for(let i = 0; i < numberOfPages; i++) {
      this.noOpages.push(i+1);
    }
  }

  sliceArray(){
    this.DoctorsViewed = this.Doctors.slice(this.currentPage *this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
  }

  onPagenation(i : number) {
    if( i > -1 && i < this.noOpages.length ) {
      this.currentPage =i;
      this.sliceArray()
    }

  }


   array : Doctor[] | any[] = []
  async selectDoctor(ele : HTMLInputElement){

      console.log(ele)
      let result: Doctor[] | any[] =[]
      console.log(ele.checked)
      console.log(ele.value)

      if(ele.checked){
       console.log('checked')

    this.ds.getDoctorsBy(ele.name, ele.value).subscribe(data => {
          result = data;
          for (let i = 0; i < result.length; i++) {
            if (!this.array.includes(result[i])) {
              this.array.push(result[i]);
            }
          }
          this.Doctors=this.array
          this.paging()
          this.sliceArray()
        })
    }
    else if(!ele.checked){

   console.log('not checked')
   console.log(this.array)
   console.log(ele.value)

   this.array = this.array.filter((doc: Doctor | any)=>{console.log('ok'); return doc[ele.name] != ele.value;})

   console.log(this.array)

    // for(let i=0; i< this.array.length-1; i++){
    //   if(this.array[i][ele.name] == ele.value)
    //      this.array.splice(i, 1)
    //  }
    //  console.log(this.array)


      if( this.array.length == 0 ){
        console.log('array 0')
        this.DocObserable= this.ds.getAllDoctors().subscribe(data =>{
          this.Doctors=data;
          this.paging()
          this.sliceArray()
        })
      }
      else{
      console.log('new array')
      this.Doctors= this.array
      this.paging()
      this.sliceArray()
      }
    }

   }






}
