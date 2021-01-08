import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBusRouteComponent } from './update-bus-route.component';

describe('UpdateBusRouteComponent', () => {
  let component: UpdateBusRouteComponent;
  let fixture: ComponentFixture<UpdateBusRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBusRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBusRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
