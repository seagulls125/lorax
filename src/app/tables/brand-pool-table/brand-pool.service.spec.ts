import { TestBed } from '@angular/core/testing';

import { BrandPoolService } from './brand-pool.service';

describe('BrandPoolService', () => {
  let service: BrandPoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandPoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
