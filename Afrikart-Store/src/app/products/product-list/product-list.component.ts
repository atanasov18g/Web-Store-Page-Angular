import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductService } from '../../Services/Product.service';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from './single-product/single-product.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, SingleProductComponent],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  productService: ProductService = inject(ProductService);


  products: Product[] = [];


  ngOnInit(){
    this.products = this.productService.products;
  }

}
