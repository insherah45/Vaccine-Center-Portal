import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { VaccineCenterComponent } from './vaccine-center/vaccine-center.component';
import { VaccinesComponent } from './vaccines/vaccines.component';
import { CollapsFaqComponent } from './collaps-faq/collaps-faq.component';
import { HomeComponent } from './home/home.component';
import { FoterComponent } from './foter/foter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

import { TableOfCentersComponent } from './table-of-centers/table-of-centers.component';
import { FormAddCenterComponent } from './form-add-center/form-add-center.component';

import { CenterFilterPipe } from './center.filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
     VaccineCenterComponent,
    VaccinesComponent,
    CollapsFaqComponent,
    HomeComponent,
    FoterComponent,
    NavbarComponent,
    ReservationComponent,
    
    LoginAdminComponent,
    CenterFilterPipe,
  
    TableOfCentersComponent,
       FormAddCenterComponent,
      
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)