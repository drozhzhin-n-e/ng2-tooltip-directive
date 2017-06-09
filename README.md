Angular2 tooltip directive.

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

Example CSS: https://github.com/drozhzhin-n-e/ng2-tooltip-directive/blob/master/example/src/styles.css

## Usage
    
    <span tooltip="Tooltip" placement="top" show-delay="500">Tooltip on top</span>

## Properties

| name             | type                                | description                                 |
|------------------|-------------------------------------|---------------------------------------------|
| placement        | "top", "bottom", "left", "right"    | The position of the tooltip.                |
| show-delay       | number                              | The delay in ms before showing the tooltip. |
| hide-delay       | number                              | The delay in ms before removing the tooltip.|
| z-index          | number                              | Z-index of the tooltip.                     |

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Demo
http://crystalui.org/components/tooltip