import { TestBed } from '@angular/core/testing';

import { PicOfTheDayService } from './pic-of-the-day.service';
import { provideHttpClient } from '@angular/common/http';

describe('PicOfTheDayService', () => {
  let service: PicOfTheDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(PicOfTheDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
