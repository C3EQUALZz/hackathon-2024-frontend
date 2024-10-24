import { Component } from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.scss'
})
export class WeatherPageComponent {

  constructor(
    private weatherService: WeatherService,
  ) {

  }
}
