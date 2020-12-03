import { TestBed } from '@angular/core/testing';

import { ProductPoolService } from './product-pool.service';

describe('ProductPoolService', () => {
  let service: ProductPoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
