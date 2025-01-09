import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
})
export class SafeUrlPipe implements PipeTransform {
  sanitizer = inject(DomSanitizer);
  transform(url: string | undefined): SafeUrl | null {
    if (!url) return null;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
