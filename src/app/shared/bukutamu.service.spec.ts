import { TestBed } from '@angular/core/testing';

import { BukutamuService } from './bukutamu.service';

describe('BukutamuService', () => {
  let service: BukutamuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BukutamuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
