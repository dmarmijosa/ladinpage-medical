import {AfterViewInit, Component} from '@angular/core';
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styles: ``
})
export class TestimonialsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      modules: [Navigation, Pagination]
    })
  }

}
