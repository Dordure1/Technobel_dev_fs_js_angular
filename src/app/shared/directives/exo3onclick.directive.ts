import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appExo3onclick]'
})
export class Exo3onclickDirective {
  myTimeout:any 

  constructor(private el : ElementRef) { 
  }

  @HostListener('click')
    onMouseClick(){
      const mydiv = document.getElementById("animation")
      mydiv.replaceChildren()
      let newp = document.createElement("h1")
      let newdiv = document.createElement("div")
      newp.innerText = 'Super'
      mydiv.appendChild(newdiv)
      newp.classList.add("animate__animated")
      newp.classList.add("animate__backInDown")
      newdiv.appendChild(newp)
      
      setTimeout(( )=>  this.deleteContent(mydiv),4000)
    }
    
    deleteContent(div : HTMLElement){
      div.replaceChildren()
      clearTimeout(this.myTimeout)
    }
  }

