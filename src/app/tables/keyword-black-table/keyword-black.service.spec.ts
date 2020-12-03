import { TestBed } from '@angular/core/testing';

import { KeywordBlackService } from './keyword-black.service';

describe('KeywordBlackService', () => {
  let service: KeywordBlackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeywordBlackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
