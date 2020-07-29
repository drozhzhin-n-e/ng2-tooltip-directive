import { Component, ViewChildren, ViewChild } from '@angular/core';
import { TooltipDirective } from './tooltip/tooltip.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
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


  @ViewChild('myTooltip') myTooltip;

  show() {
      this.myTooltip.show();
  }
}
