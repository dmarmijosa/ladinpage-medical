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
  listaRutas=["home","doctors","departament","services","blog","contact"]
  protected readonly input = input;
}
