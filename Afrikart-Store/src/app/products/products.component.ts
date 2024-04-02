import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductListComponent,SearchBarComponent, ProductDetailsComponent, CommonModule,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

searchTextOnParent: string = '';


@ViewChild(ProductListComponent,{static: true}) productListComponentRef: ProductListComponent;
//'productListComponent' also the templRef is viable.


setSearchText(value: string){

this.searchTextOnParent = value;

}

}
