import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';
import {  provideHttpClient } from '@angular/common/http';

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(NewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
