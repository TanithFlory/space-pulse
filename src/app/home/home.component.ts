import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { PicOfTheDayComponent } from '../components/pic-of-the-day/pic-of-the-day.component';
import { NewsComponent } from '../components/news/news.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, PicOfTheDayComponent, NewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
