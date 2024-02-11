import { Component } from '@angular/core';
import {HeroComponent} from '../hero/hero.component';
import {StatsComponent} from '../stats/stats.component';
import {ServicesComponent} from '../services/services.component';
import {AppointmentComponent} from '../appointment/appointment.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    StatsComponent,
    ServicesComponent,
    AppointmentComponent
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
