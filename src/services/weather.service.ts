import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {

  }

  getWeatherData() {
    this.http.get(
      'https://api.openweathermap.org/data/2.5/forecast/forecast.json',
    )
  }
}
