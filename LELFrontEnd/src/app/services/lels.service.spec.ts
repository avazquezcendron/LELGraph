import { TestBed, inject } from '@angular/core/testing';

import { LelsService } from './lels.service';

describe('LelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LelsService]
    });
  });

  it('should be created', inject([LelsService], (service: LelsService) => {
    expect(service).toBeTruthy();
  }));
});
