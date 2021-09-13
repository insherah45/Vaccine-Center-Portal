import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccineCenterComponent } from './vaccine-center/vaccine-center.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CollapsFaqComponent } from './collaps-faq/collaps-faq.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';
import { TableOfCentersComponent } from './table-of-centers/table-of-centers.component';
import { FormAddCenterComponent } from './form-add-center/form-add-center.component';

const routes: Routes = [
  {path: '', component : HomeComponent},

  {path: 'CENTERS', component : VaccineCenterComponent},
  {path: 'reversation', component : ReservationComponent},
  {path: 'FAQ', component : CollapsFaqComponent},
  {path : 'login',component:LoginAdminComponent},
  {path : 'Data',component:TableOfCentersComponent},
  {path : 'Addform',component: FormAddCenterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
