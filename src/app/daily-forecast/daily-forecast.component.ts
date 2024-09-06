import { Component, Input } from '@angular/core';
import { Daily, DailyUnits } from '../../interfaces/info';
import { CommonModule } from '@angular/common';
import { WeatherDisplayComponent } from "../weather-display/weather-display.component";
import { weatherCodeToText } from '../../general/helper';

@Component({
  selector: 'app-daily-forecast',
  standalone: true,
  imports: [CommonModule, WeatherDisplayComponent],
  templateUrl: './daily-forecast.component.html',
  styleUrl: './daily-forecast.component.scss'
})
export class DailyForecastComponent {
  @Input() daily: Daily | null = null;
  @Input() units: DailyUnits | null = null;

  weatherToString(weatherCode: number): string {
    return weatherCodeToText(weatherCode);
  }
}
