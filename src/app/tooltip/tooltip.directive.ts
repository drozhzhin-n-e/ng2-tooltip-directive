import { Directive, ElementRef, HostListener, Input, ComponentFactoryResolver, EmbeddedViewRef, ApplicationRef, Injector, ComponentRef, OnInit, Output, EventEmitter, OnDestroy, Inject, Optional } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { TooltipOptionsService } from './tooltip-options.service';
import { defaultOptions, backwardCompatibilityOptions } from './options';
import { TooltipOptions } from './tooltip-options.interface';

export interface AdComponent {
    data: any;
    show: boolean;
    close: boolean;
    events: any;
}

@Directive({
    selector: '[tooltip]'
})

export class TooltipDirective {

    hideTimeoutId: number;
    destroyTimeoutId: number;
    hideAfterClickTimeoutId: number;
    createTimeoutId: number;
    showTimeoutId: number;
    componentRef: any;
    elementPosition: any;
    _showDelay: any = 0;
    _hideDelay: number = 300;
    _id: any;
    _options: any = {};
    _defaultOptions: any;
    _destroyDelay: number;
    componentSubscribe: any;

    @Input('options') set options(value: TooltipOptions) {
        if (value && defaultOptions) {
            this._options = value;
        }
    }
    get options() {
        return this._options;
    }

    @Input('tooltip') tooltipValue: string;
    @Input('placement') placement: string;
    @Input('content-type') contentType: string;
    @Input('hide-delay-mobile') hideDelayMobile: number;
    @Input('z-index') zIndex: number;
    @Input('animation-duration') animationDuration: number;
    @Input('trigger') trigger: string;
    @Input('tooltip-class') tooltipClass: string;
    @Input('display') display: boolean;
    @Input('display-mobile') displayMobile: boolean;
    @Input('shadow') shadow: boolean;
    @Input('theme') theme: boolean;
    @Input('offset') offset: number;
    @Input('max-width') maxWidth: number;
    @Input('id') id: any;
    @Input('show-delay') showDelay: number;
    @Input('hide-delay') hideDelay: number;
    @Input('hideDelayAfterClick') hideDelayAfterClick: number;

    get isTooltipDestroyed() {
        return this.componentRef && this.componentRef.hostView.destroyed;
    }

    get destroyDelay() {
        if (this._destroyDelay) {
            return this._destroyDelay;
        } else {
            return Number(this.getHideDelay()) + Number(this.options['animationDuration']);
        }
    }
    set destroyDelay(value: number) {
        this._destroyDelay = value;
    }

    @Output() events: EventEmitter < any > = new EventEmitter < any > ();

    constructor(
        @Optional() @Inject(TooltipOptionsService) private initOptions,
        private elementRef: ElementRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector) {}

    @HostListener('focusin')
    @HostListener('mouseenter')
    onMouseEnter() {
        if (this.isDisplayOnHover == false) {
            return;
        }

        this.show();
    }

    @HostListener('focusout')
    @HostListener('mouseleave')
    onMouseLeave() {
        if (this.options['trigger'] === 'hover') {
            this.destroyTooltip();
        }
    }

    @HostListener('click')
    onClick() {
        if (this.isDisplayOnClick == false) {
            return;
        }

        this.show();
        this.hideAfterClickTimeoutId = window.setTimeout(() => {
            this.destroyTooltip();
        }, this.options['hideDelayAfterClick'])
    }

    ngOnInit(): void {
        
    }

    ngOnChanges(changes) {
        let changedOptions = this.getProperties(changes);

        this.applyOptionsDefault(defaultOptions, changedOptions);
        this.options = this.renameProperties(this.options);
    }

    ngOnDestroy(): void {
        this.destroyTooltip({
            fast: true
        });

        if (this.componentSubscribe) {
            this.componentSubscribe.unsubscribe();
        }
    }

    getShowDelay() {
        return this.isTouchScreen ? 0 : this.options['showDelay'];
    }

    getHideDelay() {
        const hideDelay = this.options['hideDelay'];
        const hideDelayMobile = this.options['hideDelayMobile'];

        if (this.isTouchScreen) {
            if (hideDelay >= hideDelayMobile) {
                return hideDelay;
            } else {
                return hideDelayMobile;
            }
        } else {
            return hideDelay;
        }
    }

    getProperties(changes){
        let properties = {};

        for (var prop in changes) {
            if (prop !== 'options' && prop !== 'tooltipValue'){
                properties[prop] = changes[prop].currentValue;
            }
            if (prop === 'options'){
                properties = changes[prop].currentValue;
            }
        }
        return properties;
    }

    renameProperties(options: TooltipOptions) {
        for (var prop in options) {
            if (backwardCompatibilityOptions[prop]) {
                options[backwardCompatibilityOptions[prop]] = options[prop];
                delete options[prop];
            }
        }

        return options;
    }

    getElementPosition(): void {
        this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    }

    createTooltip(): void {
        this.clearTimeouts();
        this.getElementPosition();

        this.createTimeoutId = window.setTimeout(() => {
            this.appendComponentToBody(TooltipComponent);
        }, this.getShowDelay());

        this.showTimeoutId = window.setTimeout(() => {
            this.showTooltipElem();
        }, this.getShowDelay());
    }

    destroyTooltip(options = {
        fast: false
    }): void {
        this.clearTimeouts();

        if (this.isTooltipDestroyed == false) {

            this.hideTimeoutId = window.setTimeout(() => {
                this.hideTooltip();
            }, options.fast ? 0 : this.getHideDelay());

            this.destroyTimeoutId = window.setTimeout(() => {
                if (!this.componentRef || this.isTooltipDestroyed) {
                    return;
                }

                this.appRef.detachView(this.componentRef.hostView);
                this.componentRef.destroy();
                this.events.emit('hidden');
            }, options.fast ? 0 : this.destroyDelay);
        }
    }

    showTooltipElem(): void {
        this.clearTimeouts();
        ( < AdComponent > this.componentRef.instance).show = true;
        this.events.emit('show');
    }

    hideTooltip(): void {
        if (!this.componentRef || this.isTooltipDestroyed) {
            return;
        }
        ( < AdComponent > this.componentRef.instance).show = false;
        this.events.emit('hide');
    }

    appendComponentToBody(component: any, data: any = {}): void {
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);

        ( < AdComponent > this.componentRef.instance).data = {
            value: this.tooltipValue,
            element: this.elementRef.nativeElement,
            elementPosition: this.elementPosition,
            options: this.options
        }
        this.appRef.attachView(this.componentRef.hostView);
        const domElem = (this.componentRef.hostView as EmbeddedViewRef < any > ).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);

        this.componentSubscribe = ( < AdComponent > this.componentRef.instance).events.subscribe((event: any) => {
            this.handleEvents(event);
        });
    }

    clearTimeouts(): void {
        if (this.createTimeoutId) {
            clearTimeout(this.createTimeoutId);
        }

        if (this.showTimeoutId) {
            clearTimeout(this.showTimeoutId);
        }

        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
        }

        if (this.destroyTimeoutId) {
            clearTimeout(this.destroyTimeoutId);
        }
    }

    get isDisplayOnHover(): boolean {
        if (this.options['display'] == false) {
            return false;
        }

        if (this.options['displayMobile'] == false && this.isTouchScreen) {
            return false;
        }

        if (this.options['trigger'] !== 'hover') {
            return false;
        }

        return true;
    }

    get isDisplayOnClick(): boolean {
        if (this.options['display'] == false) {
            return false;
        }

        if (this.options['displayMobile'] == false && this.isTouchScreen) {
            return false;
        }

        if (this.options['trigger'] != 'click') {
            return false;
        }

        return true;
    }

    get isTouchScreen() {
        let check = false;
        navigator.maxTouchPoints ? check = true : check = false;
        return check;
    }

    applyOptionsDefault(defaultOptions, options): void {
        this.initOptions = this.renameProperties(this.initOptions);
        this.options = Object.assign({}, defaultOptions, this.initOptions || {}, options);
    }

    handleEvents(event: any) {
        if (event === 'shown') {
            this.events.emit('shown');
        }
    }

    public show() {
        if (!this.componentRef || this.isTooltipDestroyed) {
            this.createTooltip();
        } else if (!this.isTooltipDestroyed) {
            this.showTooltipElem();
        }
    }

    public hide() {
        this.destroyTooltip();
    }
}