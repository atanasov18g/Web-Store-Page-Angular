import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../Services/Cart.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'add-to-cart',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {

  faBasketShopping = faBasketShopping;

cartService: CartService = inject(CartService);


}