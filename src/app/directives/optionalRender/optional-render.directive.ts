import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appOptionalRender]'
})
export class OptionalRenderDirective {
  // set will turn this into a method that will execute whenever the property changes
  // eg it changes outside of this directive
  @Input() set appOptionalRender(condition: boolean) {
  if (condition) {
    console.log('hello')
    this.vcRef.createEmbeddedView(this.templateRef)
  }
  else {
    console.log('goodbye')
    this.vcRef.clear()
  }
}
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
}
