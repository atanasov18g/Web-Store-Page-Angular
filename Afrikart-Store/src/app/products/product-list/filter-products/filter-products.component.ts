import { CommonModule, } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'filter-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.css'
})
export class FilterProductsComponent {
  @Input()
  all: number = 0;
  @Input()
  onSale: number = 0;
  @Input()
  inStock: number = 0;


  selectedFilterRadioButton: string = 'all';

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();


  onSelectedFilterRadioButtonChanged(){
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton)
  }


}
