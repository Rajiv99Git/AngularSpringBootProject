import { TestBed } from '@angular/core/testing';

import { BusrouteService } from './busroute.service';

describe('BusrouteService', () => {
  let service: BusrouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusrouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
