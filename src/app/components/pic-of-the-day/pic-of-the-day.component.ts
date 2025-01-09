import { Component, inject, signal } from '@angular/core';
import { SectionWrapperDirective } from '../../directives/section-wrapper.directive';
import { PicOfTheDayService } from '../../services/pic-of-the-day.service';
import { catchError } from 'rxjs';
import { PicOfTheDay } from '../../../types';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-pic-of-the-day',
  imports: [SectionWrapperDirective, SafeUrlPipe],
  templateUrl: './pic-of-the-day.component.html',
  styleUrl: './pic-of-the-day.component.css',
})
export class PicOfTheDayComponent {
  picOfTheDayService = inject(PicOfTheDayService);
  picOfTheDay = signal<PicOfTheDay | null>(null);

  ngOnInit(): void {
    this.picOfTheDayService
      .getPictureOfTheDay()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((picOfTheDay) => {
        this.picOfTheDay.set(picOfTheDay);
      });
  }
}
