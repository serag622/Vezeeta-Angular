import { TestBed } from '@angular/core/testing';

import { RegionServiceService } from './region-service.service';

describe('RegionServiceService', () => {
  let service: RegionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
