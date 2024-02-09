import { Component } from '@angular/core';
import {StatsComponent} from '../stats/stats.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    StatsComponent
  ],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {

}
