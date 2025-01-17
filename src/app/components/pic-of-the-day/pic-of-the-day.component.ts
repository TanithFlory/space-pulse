import { Component, inject, signal } from '@angular/core';
import { PicOfTheDayService } from '../../services/pic-of-the-day.service';
import { catchError } from 'rxjs';
import { PicOfTheDay } from '../../../types';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { TitleComponent } from '../utils/title/title.component';

@Component({
  selector: 'app-pic-of-the-day',
  imports: [SafeUrlPipe, TitleComponent],
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
