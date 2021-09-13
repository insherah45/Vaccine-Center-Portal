import { Component, OnInit } from '@angular/core';
import { Vaccine } from '../vaccine';
import { VACCINE } from '../list-vaccine';
@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.css']
})
export class VaccinesComponent implements OnInit {
vaccine = VACCINE ;
  constructor() { }

  ngOnInit(): void {
  }
  

}
