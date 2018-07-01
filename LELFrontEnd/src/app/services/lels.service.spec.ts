import { TestBed, inject } from '@angular/core/testing';

import { LELsService } from './lels.service';

describe('LelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LELsService]
    });
  });

  it('should be created', inject([LELsService], (service: LELsService) => {
    expect(service).toBeTruthy();
  }));
});
