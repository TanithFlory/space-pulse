import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { News } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  http = inject(HttpClient);
  url = `https://api.spaceflightnewsapi.net/v4/articles/?is_featured=true&limit=6`;

  getSpaceNews() {
    return this.http.get<News>(this.url);
  }
  constructor() {}
}
