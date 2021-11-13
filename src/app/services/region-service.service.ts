import { EventEmitter, Injectable } from '@angular/core';
import { Region } from '../model/region.model';

@Injectable({
  providedIn: 'root'
})
export class regionService {
  private region: Region[] = [];
  searchEvent = new EventEmitter<String>();
  constructor() {
    this.region = [
      {
        name: "القاهرة", id: 111, regionDetails: [{ name: "كل المناطق", id: 1 },
        { name: "المعادي", id: 2 }, { name: "مدينة العبور", id: 3 }, { name: "وسط البلد", id: 4 },
        { name: "الزمالك", id: 5 }, { name: "الشروق", id: 6 }, { name: "القطامية", id: 7 },
        { name: "مصر الجديدة", id: 8 }, { name: "التجمع", id: 9 }, { name: "المنيل", id: 110 }, { name: "مدينة السلام", id: 111 },
        { name: "الزيتون", id: 112 }, { name: "العاشر من رمضان", id: 113 }, { name: "المرج", id: 114 }, { name: "", id: 115 },
        { name: "مدينة نصر", id: 116 }, { name: "حدائق القبة", id: 117 },
        { name: "شبرا", id: 118 }, { name: "الرحاب", id: 119 }, { name: "السيدة زينب", id: 120 }, { name: "العباسية", id: 121 }, { name: "المطرية", id: 122 }]
      }
      , {
        name: "الجيزة", id: 222, regionDetails: [{ name: "كل المناطق", id: 21 },
        { name: "المعادي", id: 22 }, { name: "حدائق الهرم", id: 23 }, { name: "بولاق الدكرور", id: 24 },
        { name: "العياط", id: 25 }, { name: "الدقي والمهندسين", id: 26 },
        { name: "فيصل", id: 27 }, { name: "العجوزة", id: 28 }, { name: "البدراشين", id: 29 }, { name: "إمبابة", id: 210 }, { name: "6 اكتوبر", id: 211 }, { name: "الشيخ زايد", id: 212 },
        { name: "الجيزة الجديدة", id: 213 }, { name: "الحوامدية", id: 214 }, { name: "ميدان الجيزة", id: 215 }]
      }, {
        name: "الأسكندرية", id: 333, regionDetails: [{ name: "كل المناطق", id: 31 },
        { name: "سموحة", id: 32 }, { name: "نوران", id: 33 }, { name: "جانكليس", id: 34 },
        { name: "السيوف", id: 35 }, { name: "محطة الرمل", id: 36 },
        { name: "سبورتينج", id: 37 }, { name: "كامب شيراز", id: 38 }, { name: "ابو قير", id: 39 },
        { name: "الشاطبي", id: 410 }, { name: "رشدي", id: 411 }, { name: "سيدي جابر", id: 412 }, { name: "الإبراهيمية", id: 413 },
        { name: "الأزاريطة", id: 414 }, { name: "العامرية", id: 415 }]
      },
      {
        name:"الساحل الشمالي",id:444,regionDetails:[{name:"كل المناطق",id:41},{name:"الساحل الشمالي",id:42}]
      },
      {
        name:"القليوبية",id:555,regionDetails:[{name:"كل المناطق",id:51},{name:"قليوب",id:52},{name:"شبين القناطر",id:53},{name:"مركز بنها",id:54},{name:"شبين",id:55}]
      }
    ]
  }
  getAllRegions(): Region[] {
    return this.region.slice();
  }
}
