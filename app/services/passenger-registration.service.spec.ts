import { TestBed } from '@angular/core/testing';

import { PassengerRegistrationService } from './passenger-registration.service';

describe('PassengerRegistrationService', () => {
  let service: PassengerRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
