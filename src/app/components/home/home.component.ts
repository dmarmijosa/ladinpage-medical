import { Component } from '@angular/core';
import {HeroComponent} from '../hero/hero.component';
import {StatsComponent} from '../stats/stats.component';
import {ServicesComponent} from '../services/services.component';
import {AppointmentComponent} from '../appointment/appointment.component';
import {TestimonialsComponent} from '../testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    StatsComponent,
    ServicesComponent,
    AppointmentComponent,
    TestimonialsComponent
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
