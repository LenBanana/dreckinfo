import { Component, Input, OnInit } from '@angular/core';
import { Current, CurrentUnits } from '../../interfaces/info';
import { CommonModule } from '@angular/common';
import { WeatherDisplayComponent } from "../weather-display/weather-display.component";
import { weatherCodeToText } from '../../general/helper';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CommonModule, WeatherDisplayComponent],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss'
})
export class CurrentWeatherComponent implements OnInit {
  @Input() current: Current | null = null;
  @Input() units: CurrentUnits | null = null;

  now: Date = new Date();
  locale: string = navigator.language;

  ngOnInit() {
    setInterval(() => {
      this.updateNow();
    }, 1000);
  }

  updateNow() {
    this.now = new Date();
  }

  weatherToString(weatherCode: number): string {
    return weatherCodeToText(weatherCode);
  }
}
