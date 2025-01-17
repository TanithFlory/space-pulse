import { TestBed } from '@angular/core/testing';
import { SafeUrlPipe } from './safe-url.pipe';
import { DomSanitizer } from '@angular/platform-browser';

class MockDomSanitizer {
  bypassSecurityTrustUrl(url: string) {
    return url;
  }
}

describe('SafeUrlPipe', () => {
  let pipe: SafeUrlPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SafeUrlPipe,
        { provide: DomSanitizer, useClass: MockDomSanitizer },
      ],
    });

    pipe = TestBed.inject(SafeUrlPipe);
    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('should create the pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform the URL to a safe URL', () => {
    const safeUrl = pipe.transform('http://example.com');
    expect(safeUrl).toBe('http://example.com');
  });

  it('should return null if URL is undefined', () => {
    const safeUrl = pipe.transform(undefined);
    expect(safeUrl).toBeNull();
  });
});
