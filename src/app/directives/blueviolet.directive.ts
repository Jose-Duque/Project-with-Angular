import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlueviolet]'
})
export class BluevioletDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color =  '#8a2be2';
  }

}
