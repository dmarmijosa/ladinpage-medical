import {AfterViewInit, Component} from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styles: ``
})
export class BrandsComponent implements AfterViewInit{

  ngAfterViewInit() {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 900,
      delay: 600
    });
    sr.reveal('.brands__logo',{
      delay:600,
      distance:'100px',
      interval:100,
      origin:'bottom'
    });
  }
}
