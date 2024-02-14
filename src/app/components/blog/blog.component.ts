import {AfterViewInit, Component} from '@angular/core';
import {BrandsComponent} from '../../../shared/components/brands/brands.component';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    BrandsComponent
  ],
  templateUrl: './blog.component.html',
  styles: ``
})
export class BlogComponent implements AfterViewInit{

  ngAfterViewInit() {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 900,
      delay: 600
    });
    sr.reveal('.blog__title');
    sr.reveal('.blog__post',{
      delay:600,
      distance:'100px',
      interval:100,
      origin:'bottom'

    });
  }
}
