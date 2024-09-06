import { Component } from '@angular/core';
import { InfoService } from './info-service/info.service';
import { Info } from '../../interfaces/info';
import { CommonModule } from '@angular/common';
import { LocationInfoComponent } from "../location-info/location-info.component";
import { CurrentWeatherComponent } from "../current-weather/current-weather.component";
import { DailyForecastComponent } from "../daily-forecast/daily-forecast.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, LocationInfoComponent, CurrentWeatherComponent, DailyForecastComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {  
  weatherInfo: Info | null = null;
  error: string | null = null;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.fetchInfo();
  }

  fetchInfo() {
    this.infoService.getInfo().subscribe(
      (info: Info) => {
        this.weatherInfo = info;
        this.error = null;
      },
      (error) => {
        console.error(error);
        this.error = 'Failed to fetch weather information. Please try again later.';
      }
    );
  }
}
