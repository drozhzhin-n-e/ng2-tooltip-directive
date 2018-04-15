Angular2 tooltip directive.

## Installation

1 Install the npm package.

    npm i ng2-tooltip-directive
        
2 Import `Ng2Module`:

    import { TooltipDirective } from 'ng2-tooltip-directive/components';
     
    @NgModule({
        declarations: [ TooltipDirective ]
    }) 

3 Add CSS styles

Example CSS: http://crystalui.org/components/tooltip#css-styles

## Usage
    
    <span tooltip="Tooltip" placement="top" show-delay="500">Tooltip on top</span>

## Properties

| name             | type                                | description                                 |
|------------------|-------------------------------------|---------------------------------------------|
| placement        | "top", "bottom", "left", "right"    | The position of the tooltip.                |
| show-delay       | number                              | The delay in ms before showing the tooltip. |
| hide-delay       | number                              | The delay in ms before removing the tooltip.|
| z-index          | number                              | Z-index of the tooltip.                     |
| hover            | boolean                             | Set to none to trigger the tooltip with a click. Control the closing time with `hide-delay`. `true` by default|

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Demo
http://crystalui.org/components/tooltip