import {Component} from '@angular/core';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  templateUrl: './services.component.html',
  styles: ``
})
export class ServicesComponent {
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
}
