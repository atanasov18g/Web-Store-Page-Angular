import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[DisableItem]',
  standalone: true
})
export class DisableItemDirective {

  constructor(private element: ElementRef, private render: Renderer2) {
   }

   @Input() set disableProduct(disable: Boolean){
    if(disable){
      this.render.addClass(this.element.nativeElement, 'not-available')
    }
   }




}
