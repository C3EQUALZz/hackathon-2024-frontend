import {Routes} from '@angular/router';
import {AuthPageComponent} from '../pages/auth-page/auth-page.component';
import {AppComponent} from './app.component';
import {WeatherPageComponent} from '../pages/weather-page/weather-page.component';
import {PagenotfoundComponent} from '../pages/pagenotfound/pagenotfound.component';

export const routes: Routes = [

  {
    path: 'auth', component: AuthPageComponent
  },
  {
    path: 'weather', component: WeatherPageComponent
  },
  {
    path: '', component: AppComponent
  },
  {
    path: '**', pathMatch: 'full', component: PagenotfoundComponent
  }
];
