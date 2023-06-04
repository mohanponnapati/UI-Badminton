import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewMemberMainComponent } from './new-member-main/new-member-main.component';

const routes: Routes = [
  {
    path: '',
    component: NewMemberMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewMemberRoutingModule { }
