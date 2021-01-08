import { TestBed } from '@angular/core/testing';

import { PassangerLoginService } from './passanger-login.service';

describe('PassangerLoginService', () => {
  let service: PassangerLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassangerLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
