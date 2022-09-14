import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRender]'
})
export class RenderDirective {

  //el --> ElementRef --> elemenet du dom référent la ou la directive à été placée
  /// A mettre dans le shared
  constructor(private el : ElementRef) {
    //console.log(el)
    this.el.nativeElement.style.color="#eceff1"
    this.el.nativeElement.classList +="green accent-4"
    let blockLegend = document.createElement("b")
    blockLegend.innerText = '--Ce text est issu du constructor'
    this.el.nativeElement.after(blockLegend)
    blockLegend.style.color = "white"
   
   
    this.el.nativeElement.innerText = this.el.nativeElement.innerText  + "-- ce text est issu du constructor render -- "


   }

}
