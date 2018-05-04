import {Component, ElementRef, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  host: {'class': 'tooltip'}, 
  styleUrls: ['./tooltip.component.css']
})

export class TooltipComponent {

  tooltipOffset: number = 8;
  _show:boolean = false;

  /* tslint:disable:no-input-rename */

  @Input() data: any;

  /* tslint:enable */

  @HostBinding('style.top') hostStyleTop: string;
  @HostBinding('style.left') hostStyleLeft: string;
  @HostBinding('style.z-index') hostStyleZIndex: number;
  @HostBinding('class.tooltip-show') hostClassShow: boolean;

  @Input() set show (value:boolean) {
    if (value){
      this.setPosition();
    }
    this._show = this.hostClassShow = value;
  }
  get show ():boolean {
    return this._show;
  }

  get placement(){
    return this.data.placement;
  }

  get elemetn(){
    return this.data.element;
  }

  get elementPosition(){
    return this.data.elementPosition;
  }

  get zIndex(){
    return this.data.zIndex;
  }

  get value(){
    return this.data.value;
  }

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.setPlacementClass();
    this.setZIndex();
  }

  setPosition():void {
    const elemetnHeight = this.elemetn.offsetHeight;
    const elemetnWidth = this.elemetn.offsetWidth;
    const tooltipHeight = this.elementRef.nativeElement.clientHeight;
    const tooltipWidth = this.elementRef.nativeElement.offsetWidth;
    const scrollY = window.pageYOffset;
    const tooltip = this.elementRef.nativeElement;

    if (this.placement === 'top') {
      this.hostStyleTop = (this.elementPosition.top + scrollY) - (tooltipHeight + this.tooltipOffset) + 'px';
    }

    if (this.placement === 'bottom') {
      this.hostStyleTop = (this.elementPosition.top + scrollY) + elemetnHeight + this.tooltipOffset + 'px';
    }

    if (this.placement === 'top' || this.placement === 'bottom') {
      this.hostStyleLeft = (this.elementPosition.left + elemetnWidth / 2) - tooltipWidth / 2 + 'px';
    }

    if (this.placement === 'left') {
      this.hostStyleLeft = this.elementPosition.left - tooltipWidth - this.tooltipOffset + 'px';
    }

    if (this.placement === 'right') {
      this.hostStyleLeft = this.elementPosition.left + elemetnWidth + this.tooltipOffset + 'px';
    }

    if (this.placement === 'left' || this.placement === 'right') {
      this.hostStyleTop = (this.elementPosition.top + scrollY) + elemetnHeight / 2 - tooltip.clientHeight / 2 + 'px';
    }
  }

  setPlacementClass():void {
    this.elementRef.nativeElement.classList.add('tooltip-'+this.placement);
  }

  setZIndex():void {
    if (this.zIndex){
      this.hostStyleZIndex = this.zIndex;
    }
  }
}
