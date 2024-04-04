import { Component,Input, OnChanges, OnInit, SimpleChanges, inject,} from '@angular/core';
import { Product } from '../../../Models/Product';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart, faBookJournalWhills } from '@fortawesome/free-solid-svg-icons';
import { DisableItemDirective } from '../../../Directives/disable-item.directive';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../Services/Cart.service';


@Component({
  selector: 'single-product',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, DisableItemDirective, RouterLink],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  faShoppingCart = faShoppingCart;
  faBookJournalWhills = faBookJournalWhills;


@Input()
product: Product;

cartService: CartService = inject(CartService);




addToCart(product: any){
  this.cartService.addToCart(product)
}





}
