Tooltip allows the user to specify text to be displayed when the mouse hover over an element.

## Installation

1 Install the npm package.

    npm i ng2-tooltip-directive
        
2 Import `Ng2Module`:

    import { NgModule }         from '@angular/core';
    import { BrowserModule }    from '@angular/platform-browser';
    import { AppComponent }     from './app.component';
    import { TooltipDirective } from 'ng2-tooltip-directive/components';
     
    @NgModule({
        imports:      [ BrowserModule ],
        declarations: [ AppComponent, TooltipDirective ],
        bootstrap:    [ AppComponent ]
    })
    export class AppModule { } 

3 Add CSS styles

## Usage
    
    <span tooltip="Tooltip" placement="top">Tooltip on top</span>

## Properties

| name             | type                                | description                   |
|------------------|-------------------------------------|-------------------------------|
| placement        | "top", "bottom", "left", "right"    | The position of the tooltip.  |

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Demo
https://embed.plnkr.co/DAvgAsyDtNfrcbDawAJQ/