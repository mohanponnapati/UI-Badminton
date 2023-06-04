import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCheckinComponent } from './guest-checkin.component';

describe('GuestCheckinComponent', () => {
  let component: GuestCheckinComponent;
  let fixture: ComponentFixture<GuestCheckinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestCheckinComponent]
    });
    fixture = TestBed.createComponent(GuestCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
