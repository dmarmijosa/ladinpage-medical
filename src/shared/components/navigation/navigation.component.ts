import {Component, ElementRef, input, ViewChild} from '@angular/core';
import {NgClass, NgOptimizedImage, TitleCasePipe} from '@angular/common';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    NgOptimizedImage,
    TitleCasePipe
  ],
  templateUrl: './navigation.component.html',
  styles: ``
})

export class NavigationComponent {
  toogleBtn: boolean = false;
  listaRutas=[{title:'home',ruta:'/'}, {title:'doctors',ruta:'#doctors'}, {title:'departament',ruta: '#departaments'}, {title:'services',ruta: '#services'}, {title:'blog', ruta: '#blog'}, {title:'contact',ruta: '#contact'}]
  protected readonly input = input;
}
