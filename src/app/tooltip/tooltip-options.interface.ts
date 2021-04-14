import { ContentType, Theme } from './tooltip-enums';

export interface TooltipOptions {
  'placement'?: string;
  'animationDuration'?: number;
  'animationDurationDefault'?: number;
  'autoPlacement'?: boolean;
  'contentType'?: ContentType.String | ContentType.Html | ContentType.Template;
  'delay'?: number;
  'show-delay'?: number;
  'hide-delay'?: number;
  'hide-delay-mobile'?: number;
  'hideDelayTouchscreen'?: number;
  'z-index'?: number;
  'animation-duration'?: number;
  'animation-duration-default'?: number;
  'trigger'?: string;
  'tooltip-class'?: string;
  'display'?: boolean;
  'display-mobile'?: boolean;
  'displayTouchscreen'?: boolean;
  'shadow'?: boolean;
  'theme'?: Theme.Light | Theme.Dark;
  'offset'?: number;
  'width'?: number;
  'max-width'?: number;
  'id'?: string | number;
  'hideDelayAfterClick'?: number;
  'pointerEvents'?: 'auto' | 'none';
  'position'?: { top: number, left: number };
  'showDelay'?: number;
  'hideDelay'?: number;
  'tooltipClass'?: string;
  'maxWidth'?: number;
  'zIndex'?: number;
}
