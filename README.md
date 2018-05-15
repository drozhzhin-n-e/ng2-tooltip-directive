# Tooltip for Angular

[![Build Status](https://travis-ci.org/drozhzhin-n-e/ng2-tooltip-directive.svg?branch=master)](https://travis-ci.org/drozhzhin-n-e/ng2-tooltip-directive)

## Installation

Install the npm package.

    npm i ng2-tooltip-directive
        
Import `Ng2Module`:

    import { TooltipModule } from 'ng2-tooltip-directive';
     
    @NgModule({
        imports: [ TooltipModule ]
    }) 


## Usage
    
    <span tooltip="Tooltip" placement="top" show-delay="500">Tooltip on top</span>

## Properties

| name             | type                                | default | description                                 |
|------------------|-------------------------------------|---------|---------------------------------------------|
| placement        | "top", "bottom", "left", "right"    | "top"   | The position of the tooltip.                |
| show-delay       | number                              | 0       | The delay in ms before showing the tooltip. |
| hide-delay       | number                              | 300     | The delay in ms before removing the tooltip.|
| z-index          | number                              | 0       | Z-index of the tooltip.                     |
| trigger          | "hover", "click"                    | "hover" | Specifies how the tooltip is triggered. Control the closing time with "hide-delay". |
| tooltip-class    | string                              |         | Classes to be passed to the tooltip.        |
| animation-duration | number                            | 300     | The duration controls how long the animation takes to run from start to finish. |

## Demo
http://crystalui.org/components/tooltip

## Sponsors

We use Browserstack 
[![Browserstack](http://crystalui.org/assets/img/browserstack-logo.png)](http://browserstack.com/)
