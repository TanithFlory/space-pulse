import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicOfTheDayComponent } from './pic-of-the-day.component';
import { provideHttpClient } from '@angular/common/http';

describe('PicOfTheDayComponent', () => {
  let component: PicOfTheDayComponent;
  let fixture: ComponentFixture<PicOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PicOfTheDayComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(PicOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
