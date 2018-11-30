import { Component, AfterViewInit, ViewChildren } from '@angular/core';
import { TooltipDirective } from './tooltip/tooltip.directive';

@Component({
  selector: 'second-page',
  templateUrl: './second-page.component.html'
})
export class SecondPageComponent {
  tooltipDisplay = false;
  someTooltip: any;

  tooltipOptions = {
    'placement': 'left',
    'show-delay': '500',
    'tooltip-class': 'new-tooltip-class'
  };

  @ViewChildren(TooltipDirective) tooltipDirective; 

  ngAfterViewInit() {
    this.someTooltip = this.tooltipDirective.find(elem => elem.id === "someTooltip"); 
  }

  handleTooltipEvents(event:string){
    console.log(event);
  } 
}