import { Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../Models/Product';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { SingleProductComponent } from '../product-list/single-product/single-product.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartService } from '../../Services/Cart.service';

@Component({
  selector: 'product-details',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  faWindowClose = faWindowClose;



  @Input() prodListCompInput: ProductListComponent = undefined;

  product: Product;

  cartService: CartService = inject(CartService)


  ngOnInit() {
    this.product = this.prodListCompInput.selectedProduct;
  }


  cancelProductView(){
    this.prodListCompInput.selectedProduct = undefined;
  }

  addToCart(product: any ){
    this.cartService.addToCart(product);
  }


}
