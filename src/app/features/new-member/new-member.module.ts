import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMemberRoutingModule } from './new-member-routing.module';
import { NewMemberMainComponent } from './new-member-main/new-member-main.component';


@NgModule({
  declarations: [
    NewMemberMainComponent
  ],
  imports: [
    CommonModule,
    NewMemberRoutingModule
  ]
})
export class NewMemberModule { }
