import { TestBed } from '@angular/core/testing';

import { DriverDetailsService } from './driver-detailsservice';

describe('DriverDetails;Service', () => {
  let service: DriverDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
