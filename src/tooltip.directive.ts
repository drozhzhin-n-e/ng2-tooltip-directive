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

    @HostListener("mouseenter") onMouseEnter() {
        this.getElemPosition();
        document.body.appendChild(this.createElem());
        this.setPosition();
    }
 
    @HostListener("mouseleave") onMouseLeave() {
        this.tooltip.remove();
    }

    getElemPosition(){
        this.elemPosition = this.elementRef.nativeElement.getBoundingClientRect();
    }

    createElem(){
        this.tooltip = document.createElement('span');
        this.tooltip.className += "ng-tooltip ng-tooltip-"+this.placement;
        this.tooltip.textContent = this.tooltipText;
        setTimeout(() => {  
            this.tooltip.className += " ng-tooltip-show";
        }, this.delay);

        return this.tooltip;
    }

    setPosition(){
        let elemHeight = this.elementRef.nativeElement.offsetHeight;
        let elemWidth = this.elementRef.nativeElement.offsetWidth;
        let tooltipHeight = this.tooltip.offsetHeight;
        let tooltipWidth = this.tooltip.offsetWidth;

        if (this.placement == 'top'){
            this.tooltip.style.top = this.elemPosition.top - (tooltipHeight + this.tooltipOffset)+'px';
        }

        if (this.placement == 'bottom'){
            this.tooltip.style.top = this.elemPosition.top + elemHeight + this.tooltipOffset +'px';
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
            this.tooltip.style.top = this.elemPosition.top + elemHeight/2 - tooltipHeight/2+'px';
        }
    }
}