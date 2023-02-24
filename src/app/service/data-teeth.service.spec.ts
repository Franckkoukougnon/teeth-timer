import { TestBed } from '@angular/core/testing';

import { DataTeethService } from './data-teeth.service';

describe('DataTeethService', () => {
  let service: DataTeethService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTeethService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
