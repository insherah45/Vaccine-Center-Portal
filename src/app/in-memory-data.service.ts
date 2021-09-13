import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CENTERS } from './centers';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const CENTERS= [
      { name:'مستشفى الامير حمزة',  vaccineType:'Senopharm',location:5 , distnaceToMyLoc:6  ,  area : 'عمان' ,  workingTime :'8:00AM-3:00PM'  ,
      scheduledAppointment : 'بدون حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'متوفرة'},
      { name:'مستشفى الامير حمزة',  vaccineType:'Pfizer',location:5 , distnaceToMyLoc:6  ,  area : 'عمان' ,  workingTime :'8:00AM-3:00PM' ,
      scheduledAppointment : 'يجب الحجز المسبق',  doseone : 'متوفرة ',  dosetwo : 'غير متوفرة'},
      { name:'مستشفى البشير',  vaccineType:'Sputnik',location:5 , distnaceToMyLoc:6  ,  area : 'عمان' ,  workingTime :'8:00AM-2:00PM'  ,
      scheduledAppointment : 'بدون حجز مسبق ',  doseone : 'متوفرة',  dosetwo : 'متوفرة'},
      { name:' مستشفى الجامعة الاردنية',  vaccineType:'Johnson',location:5 , distnaceToMyLoc:6  ,  area : 'عمان' ,  workingTime :'8:00AM-2:00PM' ,
      scheduledAppointment : 'بدون حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'غير متوفرة'},
      { name:'ومركز صحي الجبيهة الشامل',  vaccineType:'Senopharm',location:5 , distnaceToMyLoc:6  ,  area : 'عمان' ,  workingTime :'8:00AM-2:00PM' ,
      scheduledAppointment : ' بدون حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'متوفرة'},
      { name:'ومركز صحي القويسمة الشامل',  vaccineType:'Pfizer',location:5 , distnaceToMyLoc:6  ,  area : 'عمان' ,  workingTime :'8:00AM-2:00PM' ,
      scheduledAppointment : 'يجب الحجز المسبق',  doseone : 'متوفرة',  dosetwo : 'متوفرة'},
      { name:':مركز صحي جرش الشامل',  vaccineType:'Senopharm',location:5 , distnaceToMyLoc:6  ,  area : 'جرش' ,  workingTime :'8:00AM-2:00PM'  ,
      scheduledAppointment : 'بدون حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'متوفرة'},
      { name:':مركز صحي جرش الشامل',  vaccineType:'Pfizer',location:5 , distnaceToMyLoc:6  ,  area : 'جرش' ,  workingTime :'8:00AM-2:00PM'  ,
      scheduledAppointment : 'بدون حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'غير متوفرة'},
      { name:'مستشفى الملك المؤسس عبد الله الجامعي',  vaccineType:'AstraZeneca',location:5 , distnaceToMyLoc:6  ,  area : 'اربد' ,  workingTime :'8:00AM-3:00PM' ,
      scheduledAppointment : 'يجب حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'غير متوفرة '},
      { name:'مستشفى الامير راشد العسكري',  vaccineType:'Johnson',location:5 , distnaceToMyLoc:6  ,  area : 'اربد' ,  workingTime :'8:00AM-3:00PM'  ,
      scheduledAppointment : 'يجب حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'متوفرة'},
      { name:'مركز صحي الرمثا الغربي',  vaccineType:'Moderna',location:5 , distnaceToMyLoc:6  ,  area : '' ,  workingTime :'8:00AM-2:00PM'  ,
      scheduledAppointment : 'بدون حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'متوفرة'},
      { name:':مستشفى الرويشد',  vaccineType:'Pfizer',location:5 , distnaceToMyLoc:6  ,  area : 'المفرق' ,  workingTime :'8:00AM-2:00PM'  ,
      scheduledAppointment : 'بدون حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'متوفرة'},
      { name:': مستشفى الامير هاشم العسكري',  vaccineType:'Senopharm',location:5 , distnaceToMyLoc:6  ,  area : 'الزرقاء' ,  workingTime :'8:00AM-3:00PM' ,
      scheduledAppointment : 'بدون حجز سبق',  doseone : 'متوفرة',  dosetwo : 'متوفرة'},
      { name:'، مديرية الشؤون الصحية',  vaccineType:'Pfizer',location:5 , distnaceToMyLoc:6  ,  area : 'الزرقاء' ,  workingTime :'8:00AM-3:00PM'  ,
      scheduledAppointment : 'بدون حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'متوفرة'},
      { name:'مديرية الشؤون الصحية',  vaccineType:'Senopharm',location:5 , distnaceToMyLoc:6  ,  area : 'مأدبا' ,  workingTime :'8:00AM-3:00PM'  ,
      scheduledAppointment : 'بدون حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'متوفرة'},
      { name:'مستشفى الامير هاشم بن عبدالله العسكري ',  vaccineType:'AstraZeneca',location:5 , distnaceToMyLoc:6  ,  area : 'العقبة' ,  workingTime :'8:00AM-1:00PM'  ,
      scheduledAppointment : 'يجب حجز مسبق',  doseone : 'متوفر',  dosetwo : 'غير متوفر'},
      { name:'مستشفى الامير زيد العسكري',  vaccineType:'Moderna',location:5 , distnaceToMyLoc:6  ,  area : 'الطفيلة' ,  workingTime :'8:00AM-3:00PM'  ,
      scheduledAppointment : 'بدون حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'متوفرة'},
      { name:': مركز صحي معان الشامل ',  vaccineType:'Senopharm',location:5 , distnaceToMyLoc:6  ,  area : 'معان' ,  workingTime :'9:00AM-2:00PM' ,
      scheduledAppointment : 'يجب حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'غير متوفرة'},
      { name:'مديرية الشؤون الصحية لمحافظة البلقاء',  vaccineType:'Pfizer',location:5 , distnaceToMyLoc:6  ,  area : 'البلقاء' ,  workingTime :'9:00AM-2:00PM'  ,
      scheduledAppointment : 'بدون حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'غير متوفرة'},
      { name:': مركز صحي المزار الجنوبي',  vaccineType:'Johnson',location:5 , distnaceToMyLoc:6  ,  area : 'الكرك' ,  workingTime :'9:00AM-2:00PM'   ,
      scheduledAppointment : 'بدون حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'غير متوفرة'},
      { name:'ومستشفى الامير علي بن الحسين العسكري',  vaccineType:'Senopharm',location:5 , distnaceToMyLoc:6  ,  area : 'الكرك' ,  workingTime :'9:00AM-2:00PM'  ,
      scheduledAppointment : 'يجب حجز مسبق',  doseone : 'متوفرة',  dosetwo : 'غير متوفرة'}
    ];
return {CENTERS};


  }}
  
 