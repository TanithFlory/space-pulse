import { Component, inject, signal } from '@angular/core';
import { NewsCardComponent } from '../news-card/news-card.component';
import { NewsService } from '../../services/news.service';
import { News } from '../../../types';
import { catchError } from 'rxjs';
import { SectionWrapperDirective } from '../../directives/section-wrapper.directive';

@Component({
  selector: 'app-news',
  imports: [NewsCardComponent, SectionWrapperDirective],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent {
  newsService = inject(NewsService);
  news = signal<News | null>(null);

  ngOnInit(): void {
    this.newsService
      .getSpaceNews()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((news) => {
        this.news.set(news);
      });
  }
}
