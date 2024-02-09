import {Component, Input,} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './menu-item.component.html',
  styles: ``
})
export class MenuItemComponent {
  @Input() item!:{tipo:string,dato:string};
  constructor() {

  }
}
