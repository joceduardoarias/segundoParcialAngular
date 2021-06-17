import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUsuarioLogueado]'
})
export class UsuarioLogueadoDirective {

  @Input() 
  set appUsuarioLogueado(estado: boolean) {
    if (estado) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

}
