import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[tooltip]'
})

export class TooltipDirective{
     
    constructor(private elementRef: ElementRef){}

    tooltip: any;
    elemPosition: any;
    tooltipOffset: number = 8;

    @Input('tooltip') tooltipText = "";
    @Input() placement = "top";
    @Input() delay = 0;
    @Input('show-delay') showDelay = 0; 
    @Input('hide-delay') hideDelay = 300;
    @Input('z-index') zIndex = false;

    @HostListener("focusin")
    @HostListener("mouseenter")
    onMouseEnter() {
        this.getElemPosition();
        document.body.appendChild(this.createElem());
        this.setPosition();
    }
 
    @HostListener("focusout")
    @HostListener("mouseleave")
    onMouseLeave() {
        this.removeElem();
    }

    getElemPosition(){
        this.elemPosition = this.elementRef.nativeElement.getBoundingClientRect();
    }

    createElem(){
        this.showDelay = this.delay || this.showDelay; 
        if (this.tooltip) this.tooltip.remove();
        this.tooltip = document.createElement('span');
        this.tooltip.className += "ng-tooltip ng-tooltip-"+this.placement;
        this.tooltip.textContent = this.tooltipText;
        if (this.zIndex) this.tooltip.style.zIndex = this.zIndex;
        
        setTimeout(() => {  
            this.tooltip.className += " ng-tooltip-show";
        }, this.showDelay);

        return this.tooltip;
    }

    removeElem(){
        this.tooltip.classList.remove("ng-tooltip-show");
        setTimeout(() => {
           this.tooltip.remove();
        }, this.hideDelay); 
    }

    setPosition(){
        let elemHeight = this.elementRef.nativeElement.offsetHeight;
        let elemWidth = this.elementRef.nativeElement.offsetWidth;
        let tooltipHeight = this.tooltip.clientHeight;
        let tooltipWidth = this.tooltip.offsetWidth;

        if (this.placement == 'top'){
            this.tooltip.style.top = (this.elemPosition.top + window.scrollY) - (tooltipHeight + this.tooltipOffset)+'px';
        }

        if (this.placement == 'bottom'){
            this.tooltip.style.top = (this.elemPosition.top + window.scrollY) + elemHeight + this.tooltipOffset +'px';
        }

        if (this.placement == 'top' || this.placement == 'bottom'){
            this.tooltip.style.left = (this.elemPosition.left + elemWidth/2) - tooltipWidth/2 +'px';
        }

        if (this.placement == 'left'){
            this.tooltip.style.left = this.elemPosition.left - tooltipWidth - this.tooltipOffset +'px'; 
        }

        if (this.placement == 'right'){
            this.tooltip.style.left = this.elemPosition.left + elemWidth + this.tooltipOffset +'px'; 
        }

        if (this.placement == 'left' || this.placement == 'right'){
            this.tooltip.style.top = (this.elemPosition.top + window.scrollY) + elemHeight/2 - this.tooltip.clientHeight/2+'px';
        }
    }
}