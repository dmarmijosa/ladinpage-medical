import {AfterViewInit, Component} from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent implements AfterViewInit {

  year = new Date().getFullYear();

  ngAfterViewInit() {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 900,
      delay: 600
    });
    sr.reveal('.footer__item',{
      delay:600,
      distance:'100px',
      interval:100,
      origin:'bottom'
    });

  }
}
