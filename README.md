Angular tooltip directive.

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

## Demo
http://crystalui.org/components/tooltip