import { TestBed } from '@angular/core/testing';

import { SessionDataService } from './workout-service';

describe('Sessions', () => {
  let service: SessionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
