import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appSectionWrapper]',
})
export class SectionWrapperDirective {
  el = inject(ElementRef);

  constructor() {
    this.el.nativeElement.classList.add('wrapper');
  }
}
