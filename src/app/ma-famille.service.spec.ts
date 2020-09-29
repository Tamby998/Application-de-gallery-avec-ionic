import { TestBed } from '@angular/core/testing';

import { MaFamilleService } from './ma-famille.service';

describe('MaFamilleService', () => {
  let service: MaFamilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaFamilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
