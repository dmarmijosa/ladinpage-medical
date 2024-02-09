import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {MenuItemComponent} from '../components/menu-item/menu-item.component';
import {NavigationComponent} from '../components/navigation/navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    MenuItemComponent,
    NavigationComponent
  ],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent implements OnInit{
  itemMenu=[{tipo:'ri-map-pin-2-fill',dato:"123 Arling, Miola, NY"}, {tipo:'ri-phone-fill',dato: "(+487) 384 9452"}]
  ngOnInit() {

  }
}
