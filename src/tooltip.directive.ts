import { Component, Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[tooltip]'
})

export class TooltipDirective{
     
    constructor(private elementRef: ElementRef, private renderer: Renderer){}

    elem: any;
    elemPosition: any;
    tooltipHeight: number = 28;

    @Input('tooltip') tooltipText = "";
    @Input() placement = "top";

    @HostListener("mouseenter") onMouseEnter() {
        this.getElemPosition();
        document.body.appendChild(this.createElem());
        this.setPosition();
    }
 
    @HostListener("mouseleave") onMouseLeave() {
        this.elem.remove();
    }

    getElemPosition(){
        this.elemPosition = this.elementRef.nativeElement.getBoundingClientRect();
    }

    createElem(){
        this.elem = document.createElement('span');
        this.elem.className += "ng-tooltip ng-tooltip-"+this.placement;
        this.elem.textContent = this.tooltipText;
        return this.elem;
    }

    setPosition(){
        let nativeElemHeight = this.elementRef.nativeElement.offsetHeight;
        let nativeElemWidth = this.elementRef.nativeElement.offsetWidth;

        if (this.placement == 'top'){
            this.elem.style.top = this.elemPosition.top - (this.tooltipHeight + 8)+'px';
        }

        if (this.placement == 'bottom'){
            this.elem.style.top = this.elemPosition.top + nativeElemHeight + 8 +'px';
        }

        if (this.placement == 'top' || this.placement == 'bottom'){
            this.elem.style.left = (this.elemPosition.left + nativeElemWidth/2) - this.elem.offsetWidth/2 +'px';
        }

        if (this.placement == 'left'){
            this.elem.style.left = this.elemPosition.left - this.elem.offsetWidth - 8 +'px'; 
        }

        if (this.placement == 'right'){
            this.elem.style.left = this.elemPosition.left + nativeElemWidth + 8 +'px'; 
        }

        if (this.placement == 'left' || this.placement == 'right'){
            this.elem.style.top = this.elemPosition.top + nativeElemHeight/2 - this.tooltipHeight/2+'px';
        }
    }
}