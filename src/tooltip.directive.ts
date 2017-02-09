import { Component, Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[tooltip]'
})

export class TooltipDirective{
     
    constructor(private elementRef: ElementRef, private renderer: Renderer){}

    elem: any = false;

    @Input('tooltip') tooltipText = "";
    @HostListener("mouseenter") onMouseEnter() {

        let elemPosition = this.elementRef.nativeElement.getBoundingClientRect();

        this.elem = document.createElement('span');
        this.elem.className += "ng-tooltip";
        this.elem.textContent = this.tooltipText;
        this.elem.style.top = elemPosition.top-38+'px';
        this.elem.style.left = (elemPosition.left + this.elementRef.nativeElement.offsetWidth/2)+'px';

        document.body.appendChild(this.elem);

        this.elem.style.left = (elemPosition.left + this.elementRef.nativeElement.offsetWidth/2) - this.elem.offsetWidth/2 +'px';
    }
 
    @HostListener("mouseleave") onMouseLeave() {
        this.elem.remove();
    }
}