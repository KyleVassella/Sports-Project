import { TestBed } from '@angular/core/testing';

import { SportsService } from './sports.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SportsService', () => {
  let service: SportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
