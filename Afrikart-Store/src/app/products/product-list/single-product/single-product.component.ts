import { Component,Input,} from '@angular/core';
import { Product } from '../../../Models/Product';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { DisableItemDirective } from '../../../Directives/disable-item.directive';

@Component({
  selector: 'single-product',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, DisableItemDirective],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  faShoppingCart = faShoppingCart;
@Input()
product: Product;


}
