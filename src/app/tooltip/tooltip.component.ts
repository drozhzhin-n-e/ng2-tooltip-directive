import {Component, ElementRef, HostListener, HostBinding, Input, OnInit, EventEmitter, Renderer2} from '@angular/core';

@Component({
    selector: 'tooltip',
    templateUrl: './tooltip.component.html',
    host: {
        'class': 'tooltip'
    },
    styleUrls: ['./tooltip.component.sass']
})

export class TooltipComponent {

    _show: boolean = false;

    @Input() data: any;

    events = new EventEmitter();

    @HostBinding('style.top') hostStyleTop: string;
    @HostBinding('style.left') hostStyleLeft: string;
    @HostBinding('style.z-index') hostStyleZIndex: number;
    @HostBinding('style.transition') hostStyleTransition: string;
    @HostBinding('style.max-width') hostStyleMaxWidth: string;
    @HostBinding('class.tooltip-show') hostClassShow: boolean;
    @HostBinding('class.tooltip-shadow') hostClassShadow: boolean;
    @HostBinding('class.tooltip-light') hostClassLight: boolean;

    @HostListener('transitionend', ['$event'])
    transitionEnd(event) {
        if (this.show) {
            this.events.emit({
                type: 'shown'
            });
        }
    }

    @Input() set show(value: boolean) {
        if (value) {
            this.setPosition();
        }
        this._show = this.hostClassShow = value;
    }
    get show(): boolean {
        return this._show;
    }

    get placement() {
        return this.data.options.placement;
    }

    get element() {
        return this.data.element;
    }

    get elementPosition() {
        return this.data.elementPosition;
    }

    get options() {
        return this.data.options;
    }

    get value() {
        return this.data.value;
    }

    get tooltipOffset(): number {
        return Number(this.data.options.offset);
    }

    get isThemeLight() {
        return this.options['theme'] === 'light';
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.setPlacementClass();
        this.setZIndex();
        this.setCustomClass();
        this.setAnimationDuration();
        this.setStyles();
    }

    setPosition(): void {
        const isSvg = this.element instanceof SVGElement;
        const tooltip = this.elementRef.nativeElement;

        const elementHeight = isSvg ? this.element.getBBox().height : this.element.offsetHeight;
        const elementWidth = isSvg ? this.element.getBBox().width : this.element.offsetWidth;
        const tooltipHeight = tooltip.clientHeight;
        const tooltipWidth = tooltip.clientWidth;
        const scrollY = window.pageYOffset;

        if (this.placement === 'top') {
            this.hostStyleTop = (this.elementPosition.top + scrollY) - (tooltipHeight + this.tooltipOffset) + 'px';
        }

        if (this.placement === 'bottom') {
            this.hostStyleTop = (this.elementPosition.top + scrollY) + elementHeight + this.tooltipOffset + 'px';
        }

        if (this.placement === 'top' || this.placement === 'bottom') {
            this.hostStyleLeft = (this.elementPosition.left + elementWidth / 2) - tooltipWidth / 2 + 'px';
        }

        if (this.placement === 'left') {
            this.hostStyleLeft = this.elementPosition.left - tooltipWidth - this.tooltipOffset + 'px';
        }

        if (this.placement === 'right') {
            this.hostStyleLeft = this.elementPosition.left + elementWidth + this.tooltipOffset + 'px';
        }

        if (this.placement === 'left' || this.placement === 'right') {
            this.hostStyleTop = (this.elementPosition.top + scrollY) + elementHeight / 2 - tooltip.clientHeight / 2 + 'px';
        }
    }

    setPlacementClass(): void {
        this.renderer.addClass(this.elementRef.nativeElement, 'tooltip-' + this.placement);
    }

    setZIndex(): void {
        if (this.options['zIndex'] !== 0) {
            this.hostStyleZIndex = this.options['zIndex'];
        }
    }

    setCustomClass() {
        if (this.options['tooltipClass']) {
            this.renderer.addClass(this.elementRef.nativeElement, this.options['tooltipClass']);
        }
    }

    setAnimationDuration() {
        if (Number(this.options['animationDuration']) != this.options['animationDurationDefault']) {
            this.hostStyleTransition = 'opacity ' + this.options['animationDuration'] + 'ms';
        }
    }

    setStyles() {
        this.hostClassShadow = this.options['shadow'];
        this.hostClassLight = this.isThemeLight;
        this.hostStyleMaxWidth = this.options['maxWidth']+"px";
    }
}
