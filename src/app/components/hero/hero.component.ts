import {AfterViewInit, Component} from '@angular/core';
import {StatsComponent} from '../stats/stats.component';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    StatsComponent
  ],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent implements AfterViewInit{
  ngAfterViewInit() {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 900,
      delay: 600
    });
    sr.reveal('.hero__text',{origin:'top'})
    sr.reveal('.hero__img')
  }
}
