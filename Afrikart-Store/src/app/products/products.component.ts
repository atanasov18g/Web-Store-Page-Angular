import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductListComponent,SearchBarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

searchTextOnParent: string = '';


setSearchText(value: string){

this.searchTextOnParent = value;

}

}
