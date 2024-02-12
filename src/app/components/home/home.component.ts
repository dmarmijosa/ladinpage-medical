import { Component } from '@angular/core';
import {HeroComponent} from '../hero/hero.component';
import {StatsComponent} from '../stats/stats.component';
import {ServicesComponent} from '../services/services.component';
import {AppointmentComponent} from '../appointment/appointment.component';
import {TestimonialsComponent} from '../testimonials/testimonials.component';
import {TeamComponent} from '../team/team.component';
import {FaqsComponent} from '../faqs/faqs.component';
import {DepartamentsComponent} from '../departaments/departaments.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    StatsComponent,
    ServicesComponent,
    AppointmentComponent,
    TestimonialsComponent,
    TeamComponent,
    FaqsComponent,
    DepartamentsComponent
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
