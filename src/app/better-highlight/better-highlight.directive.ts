import { Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})


export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  // style the background color with HostBinding
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  constructor() {

  }
  
  // Sets the background color to default onInit
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  // Using HostListener to make highlighting dynamic
  @HostListener('mouseenter') mouseover(eventData: Event) { // on mouseover
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) { // on mouseleave
    this.backgroundColor = this.defaultColor;
  }

}
