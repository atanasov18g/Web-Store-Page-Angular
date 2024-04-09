import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { CartService } from '../../Services/Cart.service';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  faSearchengin = faSearchengin;
  faBasketShopping = faBasketShopping;

  cartService: CartService = inject(CartService);

  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText);
  }

@ViewChild('searchInput',{static:true}) searchInputEl: ElementRef;



  setSearchText(){
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }

}
