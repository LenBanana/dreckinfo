import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.scss'
})
export class WeatherDisplayComponent {
  @Input() weather_code: number | undefined;
  @Input() is_day: number | undefined;

  getWeatherImage(): string {
    const weatherCode = this.weather_code;
    const isDay = this.is_day === 1;

    if (weatherCode !== undefined) {
      switch (weatherCode) {
        case 0: // Clear sky
          return isDay ? 'assets/weather/sunny.png' : 'assets/weather/clear_night.png';
        case 1: // Mainly clear
          return isDay ? 'assets/weather/mainly_clear_day.png' : 'assets/weather/mainly_clear_night.png';
        case 2: // Partly cloudy
          return isDay ? 'assets/weather/partly_cloudy_day.png' : 'assets/weather/partly_cloudy_night.png';
        case 3: // Overcast
          return 'assets/weather/overcast.png';
        case 45: // Fog
          return isDay ? 'assets/weather/fog_day.png' : 'assets/weather/fog_night.png';
        case 48: // Depositing rime fog
          return 'assets/weather/rime_fog.png';
        case 51: // Light drizzle
        case 61: // Slight rain
        case 80: // Slight rain showers
          return 'assets/weather/slight_rain.png';
        case 53: // Moderate drizzle
        case 63: // Moderate rain
        case 81: // Moderate rain showers
          return 'assets/weather/moderate_rain.png';
        case 55: // Dense drizzle
        case 65: // Heavy rain
          return 'assets/weather/heavy_rain.png';
        case 82: // Violent rain showers
          return 'assets/weather/violent_rain.png';
        case 56: // Light freezing drizzle
        case 57: // Dense freezing drizzle
        case 66: // Light freezing rain
        case 67: // Heavy freezing rain
          return 'assets/weather/freezing_rain.png';
        case 71: // Slight snow fall
        case 77: // Snow grains
          return 'assets/weather/slight_snow.png';
        case 73: // Moderate snow fall
        case 85: // Slight snow showers
          return 'assets/weather/moderate_snow.png';
        case 75: // Heavy snow fall
        case 86: // Heavy snow showers
          return 'assets/weather/heavy_snow.png';
        case 95: // Thunderstorm: Slight or moderate
        case 96: // Thunderstorm with slight hail
        case 99: // Thunderstorm with heavy hail
          return 'assets/weather/thunderstorm.png';
      }
    }
    return isDay ? 'assets/weather/sunny.png' : 'assets/weather/clear_night.png';
  }
}
