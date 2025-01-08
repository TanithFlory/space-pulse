import { Component } from '@angular/core';
import { SectionWrapperDirective } from '../../directives/section-wrapper.directive';
@Component({
  selector: 'app-hero',
  imports: [SectionWrapperDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}
