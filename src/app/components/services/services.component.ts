import {AfterViewInit, Component} from '@angular/core';
import {TitleCasePipe} from '@angular/common';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  templateUrl: './services.component.html',
  styles: ``
})
export class ServicesComponent implements AfterViewInit{
  itemArray = [
    {
      title: 'General Practitioners',
      url: './assets/icons/services/icon-1.svg'
    },
    {
      title: 'Pregnancy Support',
      url: './assets/icons/services/icon-2.svg'
    },
    {
      title: 'Nutritional Support',
      url: './assets/icons/services/icon-3.svg'
    },
    {
      title: 'Pharmaceutical care',
      url: './assets/icons/services/icon-4.svg'
    }
  ]

  ngAfterViewInit() {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 900,
      delay: 600
    });
    sr.reveal('.services');
    sr.reveal('.services__top');
    sr.reveal('.services__item',{
      delay:600,
      distance:'100px',
      interval:100,
      duration:1500,
      origin:'bottom'
    });

  }
}
