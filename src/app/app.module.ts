import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TooltipModule } from './tooltip/tooltip.module';
import { AppRoutingModule } from './app.routing'; 
import { AppComponent } from './app.component';
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
    TooltipModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
