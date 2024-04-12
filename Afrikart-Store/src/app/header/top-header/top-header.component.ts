import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faXTwitter, } from '@fortawesome/free-brands-svg-icons';

import { faUnlockKeyhole, faKey, faDoorOpen, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../Services/Auth.service';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from '../../add-to-cart/add-to-cart.component';
import { CartService } from '../../Services/Cart.service';
import { fireBaseAuthService } from '../../Services/firebaseAuth.service';
import { fireUser } from '../../Models/fireUser';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'top-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, CommonModule, AddToCartComponent],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css'
})
export class TopHeaderComponent implements OnInit, OnDestroy {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faXTwitter = faXTwitter;
  faKey = faKey;
  faUnlockKeyhole = faUnlockKeyhole;
  faDoorOpen = faDoorOpen;
  faBasketShopping = faBasketShopping;


  fireBaseAuthService: fireBaseAuthService = inject(fireBaseAuthService);
  isLogged: boolean = false;


  authService: AuthService = inject(AuthService);
  cartService: CartService = inject(CartService);


  ngOnInit() {
    this.fireBaseAuthService.user.subscribe((user: fireUser) => {
      this.isLogged = user ? true : false;
    })
  }

  ngOnDestroy() {
    this.fireBaseAuthService.user.unsubscribe();
  }


  onLogout(){
    this.fireBaseAuthService.logout();
  }

}
