import {AfterViewInit, Component} from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styles: ``
})
export class StatsComponent implements AfterViewInit{
  ngAfterViewInit() {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 900,
      delay: 600
    });

    sr.reveal('.stats__item',{
      delay:600,
      distance:'100px',
      interval:100,
      origin:'top'
    })


  }
}
