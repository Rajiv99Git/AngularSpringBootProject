import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBusDetailsComponent } from './update-bus-details.component';

describe('UpdateBusDetailsComponent', () => {
  let component: UpdateBusDetailsComponent;
  let fixture: ComponentFixture<UpdateBusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBusDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
