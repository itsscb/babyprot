import { TestBed } from '@angular/core/testing';

import { BabyprotService } from './babyprot.service';

describe('BabyprotService', () => {
  let service: BabyprotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabyprotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
