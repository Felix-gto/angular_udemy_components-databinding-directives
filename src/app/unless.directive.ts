import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // set keyword turns appUnless into a method() (even if appUnless is still a property…)
  @Input() set appUnless(condition: boolean) {

    // Display something if condition is not true
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);

    // Display nothing if condition is true
    }else {
      this.vcRef.clear();
    }
  }

                                // TemplateRef = What       |       ViewContainerRef = Where 
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
