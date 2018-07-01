import { TestBed, inject } from '@angular/core/testing';

import { SimbolosService } from './simbolos.service';

describe('SimbolosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimbolosService]
    });
  });

  it('should be created', inject([SimbolosService], (service: SimbolosService) => {
    expect(service).toBeTruthy();
  }));
});
