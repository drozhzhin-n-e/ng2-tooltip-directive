import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[tooltip]'
})

export class TooltipDirective{

    constructor(private elementRef: ElementRef){}

    tooltip: any;
    elemPosition: any;
    tooltipOffset: number = 8;
    hideTimeoutId: number;
    showTimeoutId: number;

    @Input('tooltip') tooltipText = "";
    @Input() placement = "top";
    @Input() delay = 0;
    @Input('show-delay') showDelay = 0;
    @Input('hide-delay') hideDelay = 300;
    @Input('z-index') zIndex = false;
    @Input() hover:boolean = true;

    @HostListener("focusin")
    @HostListener("mouseenter")
    @HostListener("mousemove")
    onMouseEnter() {
        if(this.hover){

          this.getElemPosition();

          if (!this.tooltip){
              this.create();
              this.setPosition();
              this.show();
          }
        }
    }

    @HostListener("focusout")
    @HostListener("mouseleave")
    @HostListener ("mousedown")
    onMouseLeave() {
        if(this.hover)
            this.hide();
    }

    @HostListener('click', ['$event'])
    onClick(e){
        this.getElemPosition();

        if (!this.tooltip){
          this.create();
          this.setPosition();
          this.show();
        }

        setTimeout(() => {
          this.hide();
        }, this.hideDelay)
    }

    getElemPosition(){
        this.elemPosition = this.elementRef.nativeElement.getBoundingClientRect();
    }

    create(){
        this.showDelay = this.delay || this.showDelay;
        this.tooltip = document.createElement('span');
        this.tooltip.className += "ng-tooltip ng-tooltip-"+this.placement;
        this.tooltip.textContent = this.tooltipText;
        if (this.zIndex) this.tooltip.style.zIndex = this.zIndex;

        document.body.appendChild(this.tooltip);
    }

    show(){
        if (this.showTimeoutId) {
            clearTimeout(this.showTimeoutId);
        }

        this.showDelay = this.delay || this.showDelay;
        this.showTimeoutId = window.setTimeout(() => {
            if (this.tooltip){
                this.tooltip.className += " ng-tooltip-show";
            }
        }, this.showDelay);
    }

    hide(){
        clearTimeout(this.showTimeoutId);

        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
        }

        if (this.tooltip){
            this.tooltip.classList.remove("ng-tooltip-show");
            this.hideTimeoutId = window.setTimeout(() => {
               this.tooltip.parentNode.removeChild(this.tooltip);
               this.tooltip = null;
            }, this.hideDelay);
        }
    }

    setPosition(){
        let elemHeight = this.elementRef.nativeElement.offsetHeight;
        let elemWidth = this.elementRef.nativeElement.offsetWidth;
        let tooltipHeight = this.tooltip.clientHeight;
        let tooltipWidth = this.tooltip.offsetWidth;
        let scrollY = window.pageYOffset;

        if (this.placement == 'top'){
            this.tooltip.style.top = (this.elemPosition.top + scrollY) - (tooltipHeight + this.tooltipOffset)+'px';
        }

        if (this.placement == 'bottom'){
            this.tooltip.style.top = (this.elemPosition.top + scrollY) + elemHeight + this.tooltipOffset +'px';
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
            this.tooltip.style.top = (this.elemPosition.top + scrollY) + elemHeight/2 - this.tooltip.clientHeight/2+'px';
        }
    }
}
