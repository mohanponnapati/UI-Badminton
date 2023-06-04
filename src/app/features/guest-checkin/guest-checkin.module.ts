import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestCheckinRoutingModule } from './guest-checkin-routing.module';
import { GuestCheckinComponent } from './guest-checkin-main/guest-checkin.component';


@NgModule({
  declarations: [
    GuestCheckinComponent
  ],
  imports: [
    CommonModule,
    GuestCheckinRoutingModule
  ]
})
export class GuestCheckinModule { }
