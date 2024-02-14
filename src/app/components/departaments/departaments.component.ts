import {AfterViewInit, Component} from '@angular/core';
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/types/modules';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-departaments',
  standalone: true,
  imports: [],
  templateUrl: './departaments.component.html',
  styles: ``
})
export class DepartamentsComponent implements AfterViewInit{
  ngAfterViewInit(): void {


    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 900,
      delay: 600
    });
    sr.reveal('.departaments__bg');
    sr.reveal('.departaments__container');
  }
}
