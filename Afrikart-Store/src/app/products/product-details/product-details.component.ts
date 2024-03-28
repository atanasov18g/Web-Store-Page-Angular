import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'product-details',
  standalone: true,
  imports: [ProductListComponent, CommonModule, FontAwesomeModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  faWindowClose = faWindowClose;



  @Input() productListCompInput: ProductListComponent = undefined;

  product: Product;


  ngOnInit() {
    this.product = this.productListCompInput.selectedProduct;
  }


  cancelProductView(){
    this.productListCompInput.selectedProduct = undefined;
  }

}
