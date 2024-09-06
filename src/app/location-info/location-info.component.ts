import { Component, Input } from '@angular/core';
import { Geolocation } from '../../interfaces/info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-info.component.html',
  styleUrl: './location-info.component.scss'
})
export class LocationInfoComponent {
  @Input() geolocation: Geolocation | null = null;

}
