import { TestBed, inject } from '@angular/core/testing';

import { ImpactosService } from './impactos.service';

describe('ImpactosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImpactosService]
    });
  });

  it('should be created', inject([ImpactosService], (service: ImpactosService) => {
    expect(service).toBeTruthy();
  }));
});
