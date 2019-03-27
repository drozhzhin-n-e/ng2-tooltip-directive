import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip.directive';
import { TooltipComponent } from './tooltip.component';
import { TooltipOptions } from './tooltip-options.interface';
import { TooltipOptionsService } from './tooltip-options.service';

@NgModule({
    declarations: [
        TooltipDirective,
        TooltipComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TooltipDirective
    ],
    entryComponents: [
        TooltipComponent
    ]
})
export class TooltipModule {

      static forRoot(initOptions: TooltipOptions): ModuleWithProviders {
        return {
            ngModule: TooltipModule,
            providers: [
                {
                    provide: TooltipOptionsService,
                    useValue: initOptions
                }
            ]
        };
    }
}
