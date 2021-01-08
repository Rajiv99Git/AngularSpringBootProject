import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerRegistrationComponent } from './passanger-registration.component';

describe('PassangerRegistrationComponent', () => {
  let component: PassangerRegistrationComponent;
  let fixture: ComponentFixture<PassangerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassangerRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassangerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
