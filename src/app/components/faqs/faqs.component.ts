import {AfterViewInit, Component} from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [],
  templateUrl: './faqs.component.html',
  styles: ``
})
export class FaqsComponent implements AfterViewInit{
  ngAfterViewInit() {
    const faqItems =  document.querySelectorAll('.faq__item');
    faqItems.forEach((item)=>{
      const faqBtn = item.querySelector('.faq__btn');
      item.addEventListener('click',()=>{
        const isOpen = item.classList.toggle('open');
        let iconClass = isOpen ? 'ri-subtract-fill':'ri-add-fill';
        // @ts-ignore
        let iconElement = faqBtn.querySelector('i');
        // @ts-ignore
        iconElement.classList = `${iconClass} text-2xl`
      })
    });

    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 900,
      delay: 600
    });

    sr.reveal('.faq__title');
    sr.reveal('.faq__item',{
      delay:600,
      distance:'100px',
      interval:100,
      origin:'bottom'
    });

  }
}
