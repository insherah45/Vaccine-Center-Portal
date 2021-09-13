import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CENTERS } from '../centers';

@Component({
  selector: 'app-table-of-centers',
  templateUrl: './table-of-centers.component.html',
  styleUrls: ['./table-of-centers.component.css']
})
export class TableOfCentersComponent implements OnInit {
  vaccineCenter = CENTERS;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.route.navigate(['/login']);
  }
}
