import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'guest-checkin',
    loadChildren: () =>
      import('./features/guest-checkin/guest-checkin.module').then(
        (m) => m.GuestCheckinModule
      ),
  },
  {
    path: 'new-member',
    loadChildren: () =>
      import('./features/new-member/new-member.module').then(
        (m) => m.NewMemberModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
