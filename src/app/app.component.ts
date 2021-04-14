import { AfterViewInit, Component, ViewChild, ViewChildren } from '@angular/core';
import { Placement, TooltipDirective } from './tooltip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  tooltipDisplay = false;
  someTooltip: any;

  tooltipOptions = {
    placement: Placement.Left,
    'show-delay': '500',
    'tooltip-class': 'new-tooltip-class'
  };

  @ViewChildren(TooltipDirective) tooltipDirective;
  @ViewChild('myTooltip') myTooltip;

  ngAfterViewInit(): void {
    this.someTooltip = this.tooltipDirective.find(elem => elem.id === 'someTooltip');
  }

  handleTooltipEvents(event: string): void {
    console.log(event);
  }

  show(): void {
    this.myTooltip.show();
  }
}
