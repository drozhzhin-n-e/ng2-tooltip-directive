import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TooltipModule, TooltipOptions } from './tooltip';
//import { TooltipModule } from 'ng2-tooltip-directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from './tooltip/tooltip.module';
import { FirstPageComponent } from './first-page.component';
import { SecondPageComponent } from './second-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot({} as TooltipOptions), // initialize custom, app-wide, default tooltip-options here
    // or import normally i.e. TooltipModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
