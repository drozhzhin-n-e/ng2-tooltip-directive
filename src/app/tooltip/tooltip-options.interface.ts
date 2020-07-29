export interface TooltipOptions {
    'placement'?: string;
    'autoPlacement'?: boolean;
    'contentType'?: 'string' | 'html' | 'template';
    'delay'?: number;
    'showDelay'?: number;
    'hideDelay'?: number;
    'hideDelayMobile'?: number;
    'hideDelayTouchscreen'?: number;
    'zIndex'?: number;
    'animationDuration'?: number;
    'animationDurationDefault'?: number;
    'trigger'?: string;
    'tooltipClass'?: string;
    'display'?: boolean;
    'displayMobile'?: boolean;
    'displayTouchscreen'?: boolean;
    'shadow'?: boolean;
    'theme'?: string;
    'offset'?: number;
    'width'?: number;
    'maxWidth'?: number;
    'id'?: string | number;
    'hideDelayAfterClick'?: number;
    'pointerEvents'?: 'auto' | 'none';
    'position'?: {top: number, left: number};
}
