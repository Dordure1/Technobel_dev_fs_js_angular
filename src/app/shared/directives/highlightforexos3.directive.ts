import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightforexos3]'
})
export class Highlightforexos3Directive {
  @Input()
    defaultLiner :any
  


  constructor(private el : ElementRef) { 
    // this.el.nativeElement.style.backgroundColor ="#eceff1"
    this.el.nativeElement.style.fontWeight = "bold"

}
}