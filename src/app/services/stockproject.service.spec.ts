import { TestBed } from '@angular/core/testing';

import { StockprojectService } from './stockproject.service';

describe('StockprojectService', () => {
  let service: StockprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
