import { Component, inject } from '@angular/core';
import { CartService } from '../../Services/Cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../Models/Product';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

cartService: CartService = inject(CartService)


}
