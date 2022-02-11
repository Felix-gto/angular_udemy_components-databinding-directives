import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({                                 // @Directive decorator needed (import from @angular/core)
    selector: '[appBasicHighlight]',         // [selector]: how we will use this custom directive in a template - pass to desired HTML element ( without [] )

})

export class BasicHighlightDirective implements OnInit{    // Export a class with a custom name, set it to implement onInit

    constructor(private elementRef: ElementRef) { //elementRef - custom desired name... but type must be ElementRef (import from @angular/core). private makes it a property ElementRef - to be able to use this data everywhere in the class
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';  // set the element's background-color to green
        this.elementRef.nativeElement.style.color = 'white';
    }

}