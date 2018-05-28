import { Component, AfterViewInit, ViewChildren } from '@angular/core';
import { TooltipDirective } from './tooltip/tooltip.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tooltipDisplay = false;
  someTooltip: any;

  @ViewChildren(TooltipDirective) tooltipDirective; 

  ngAfterViewInit() {
    this.someTooltip = this.tooltipDirective.find(elem => elem.id === "someTooltip"); 
  }

  handleTooltipEvents(event:string){
    alert(event);
  }
}