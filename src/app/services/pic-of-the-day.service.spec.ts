import { TestBed } from '@angular/core/testing';

import { PicOfTheDayService } from './pic-of-the-day.service';

describe('PicOfTheDayService', () => {
  let service: PicOfTheDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicOfTheDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
