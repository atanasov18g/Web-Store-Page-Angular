import { CommonModule } from '@angular/common';
import { Component, Input,} from '@angular/core';

@Component({
  selector: 'loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {

@Input() showLoading: boolean = false;


showLoader(loading: boolean){
  this.showLoading = loading;
}


}
