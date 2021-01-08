import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDetailslistComponent } from './bus-detailslist.component';

describe('BusDetailslistComponent', () => {
  let component: BusDetailslistComponent;
  let fixture: ComponentFixture<BusDetailslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusDetailslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
