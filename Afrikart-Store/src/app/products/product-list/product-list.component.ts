import { Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductService } from '../../Services/Product.service';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from './single-product/single-product.component';
import { FilterProductsComponent } from './filter-products/filter-products.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, SingleProductComponent, FilterProductsComponent,],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  productService: ProductService = inject(ProductService);


  products: Product[] = [];

  selectedProduct: Product;


  totalProducts = this.productService.products.length;
  totalProductsOnSale = this.productService.products.filter(p => p.is_on_sale === true).length;
  totalProductsInStock = this.productService.products.filter(p => p.is_in_inventory === true).length;

  @Input()
  searchTextOnSibling: string = '';



  ngOnInit() {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    })
  }


  selectedFilterRadioButtonOnParent: string = 'all';


  onFilterChanged(value: string) {
    this.selectedFilterRadioButtonOnParent = value;
  }

}
