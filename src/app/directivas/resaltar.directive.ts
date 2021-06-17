import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective implements OnInit {

  @Input()
  appResaltar !: number ;
  
  
  constructor(private el:ElementRef) { 
    console.log(this.appResaltar);
  }
  ngOnInit(): void {
    this.cambiarColor(this.appResaltar)
  }

  private cambiarColor(valor:number){
    if(valor==10){
      this.el.nativeElement.style.backgroundColor='red';
    }else if (valor>=20) {
      this.el.nativeElement.style.backgroundColor='yellow';
    }
    
  }
  
}
