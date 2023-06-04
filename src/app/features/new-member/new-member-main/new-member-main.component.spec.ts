import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMemberMainComponent } from './new-member-main.component';

describe('NewMemberMainComponent', () => {
  let component: NewMemberMainComponent;
  let fixture: ComponentFixture<NewMemberMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMemberMainComponent]
    });
    fixture = TestBed.createComponent(NewMemberMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
