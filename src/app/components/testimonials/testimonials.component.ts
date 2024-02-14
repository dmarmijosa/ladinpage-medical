import {AfterViewInit, Component} from '@angular/core';
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styles: ``
})
export class TestimonialsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const uno = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      modules: [Navigation, Pagination]
    });

    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 900,
      delay: 600
    });
    sr.reveal('.testimonial');
    sr.reveal('.testimonial__container');
  }
}
