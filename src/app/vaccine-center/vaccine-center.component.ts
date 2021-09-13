import { Component, Input, OnInit } from '@angular/core';
import { VaccineCenter } from '../vaccineCenters';
import { CENTERS } from '../centers';
import { TableOfCentersComponent } from '../table-of-centers/table-of-centers.component';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-vaccine-center',
  templateUrl: './vaccine-center.component.html',
  styleUrls: ['./vaccine-center.component.css']
})
export class VaccineCenterComponent implements OnInit {
vaccineCenter= CENTERS;
 searchTerm: string ='';
 

  constructor() { }
 
  ngOnInit(): void {
    
  }

  
}
