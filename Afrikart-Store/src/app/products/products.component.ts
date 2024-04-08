import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { CartComponent } from '../add-to-cart/cart/cart.component';
import { EventType, Router, Event } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductListComponent, SearchBarComponent, ProductDetailsComponent, CommonModule, CartComponent,AddToCartComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  searchTextOnParent: string = '';

  showLoading: boolean = false;
  router: Router = inject(Router);

  @ViewChild(ProductListComponent, { static: true }) productListComponentRef: ProductListComponent;
  //'productListComponent' also the templRef is viable.


  setSearchText(value: string) {

    this.searchTextOnParent = value;

  }



  ngOnInit() {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent.type === EventType.NavigationStart) {
        this.showLoading = true;
      }
      if (routerEvent.type === EventType.NavigationEnd || routerEvent.type === EventType.NavigationCancel) {
        this.showLoading = false;
      }
    })
  }

}
