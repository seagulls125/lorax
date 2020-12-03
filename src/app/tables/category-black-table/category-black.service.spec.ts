import { TestBed } from '@angular/core/testing';

import { CategoryBlackService } from './category-black.service';

describe('CategoryBlackService', () => {
  let service: CategoryBlackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryBlackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
