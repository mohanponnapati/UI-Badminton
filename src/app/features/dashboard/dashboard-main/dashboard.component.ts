import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  guestCheckIn(): void {
    this.router.navigate(['/guest-checkin']);
  }

  addNewMember(): void {
    this.router.navigate(['/new-member']);
  }
}
