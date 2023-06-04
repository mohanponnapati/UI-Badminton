import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestCheckinComponent } from './guest-checkin-main/guest-checkin.component';

const routes: Routes = [
  {
    path: '',
    component: GuestCheckinComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestCheckinRoutingModule { }
