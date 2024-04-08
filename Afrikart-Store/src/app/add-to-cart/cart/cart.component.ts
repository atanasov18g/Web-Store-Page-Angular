import { Component, inject } from '@angular/core';
import { CartService } from '../../Services/Cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../Models/Product';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrashCan,faCubesStacked, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  faTrashCan = faTrashCan;
  faCubesStacked = faCubesStacked;
  faArrowLeft = faArrowLeft;


cartService: CartService = inject(CartService)


}
