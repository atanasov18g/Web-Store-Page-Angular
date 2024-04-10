import { Component, Input, OnInit, Output, inject } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductService } from '../../Services/Product.service';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from './single-product/single-product.component';
import { FilterProductsComponent } from './filter-products/filter-products.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CartService } from '../../Services/Cart.service';
import { AddToCartComponent } from '../../add-to-cart/add-to-cart.component';
import { LoaderComponent } from '../../utility/loader/loader.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, SingleProductComponent, FilterProductsComponent,AddToCartComponent, LoaderComponent],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  showLoading: boolean = false;

  productService: ProductService = inject(ProductService);
  

  products: Product[] = [];



  selectedProduct: Product;


  totalProducts = this.productService.products.length;
  totalProductsOnSale = this.productService.products.filter(p => p.is_on_sale === true).length;
  totalProductsInStock = this.productService.products.filter(p => p.is_in_inventory === true).length;

  @Input()
  searchTextOnSibling: string = '';



  ngOnInit() {
    this.showLoading = true;
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.showLoading = false;
    })
  }


  selectedFilterRadioButtonOnParent: string = 'all';


  onFilterChanged(value: string) {
    this.selectedFilterRadioButtonOnParent = value;
  }




}
