import {AfterViewInit, Component} from '@angular/core';
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styles: ``
})
export class TeamComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const team = new Swiper('.swiper1',{
      loop: true,
      pagination: {
        el: '.swiper-pagination1',
      },
      modules: [Navigation, Pagination]
    });

    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 900,
      delay: 600
    });

    sr.reveal('.team__title');
    sr.reveal('.team__slider');

  }

}
