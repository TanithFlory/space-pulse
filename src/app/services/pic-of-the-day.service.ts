import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PicOfTheDay } from '../../types';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PicOfTheDayService {
  http = inject(HttpClient);
  url = `${environment.apiUrl}/planetary/apod?api_key=${environment.apiKey}`;

  getPictureOfTheDay() {
    console.log(this.url);
    return this.http.get<PicOfTheDay>(this.url);
  }

  constructor() {}
}
