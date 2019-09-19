export interface TooltipOptions {
    'placement'?: string;
    'content-type'?: 'string' | 'html' | 'template';
    'delay'?: number;
    'show-delay'?: number;
    'hide-delay'?: number;
    'hide-delay-mobile'?: number;
    'z-index'?: number;
    'animation-duration'?: number;
    'animation-duration-default'?: number;
    'trigger'?: string;
    'tooltip-class'?: string;
    'display'?: boolean;
    'display-mobile'?: boolean;
    'shadow'?: boolean;
    'theme'?: string;
    'offset'?: number;
    'width'?: number;
    'max-width'?: number;
    'id'?: string | number;
    'hideDelayAfterClick'?: number;
    'pointerEvents'?: 'auto' | 'none';
    'position'?: {top: number, left: number};
}