import { Component } from '@angular/core';
import {HeroComponent} from '../hero/hero.component';
import {StatsComponent} from '../stats/stats.component';
import {ServicesComponent} from '../services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    StatsComponent,
    ServicesComponent
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
