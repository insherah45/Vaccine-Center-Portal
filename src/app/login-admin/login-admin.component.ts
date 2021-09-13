import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
username : string = "insh45@vacssine.com";
pass : string ="45in45";
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  Login(){
if(this.username=="insh45@vacssine.com" && this.pass=="45in45"){
  this.route.navigate(['/Data']);
}


else {
  this.route.navigate(['/login']);
}
  }
}
