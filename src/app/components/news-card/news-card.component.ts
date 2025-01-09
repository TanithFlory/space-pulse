import { Component, input } from '@angular/core';
import { Article } from '../../../types';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { TruncateTextPipe } from '../../pipes/truncate-text.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news-card',
  imports: [SafeUrlPipe, TruncateTextPipe, DatePipe],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css',
})
export class NewsCardComponent {
  article = input.required<Article>();
}
