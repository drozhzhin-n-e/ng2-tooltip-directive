# Tooltip for Angular 2

## Demo
http://crystalui.org/components/tooltip

## Installation

Install the npm package.

```sh
npm i ng2-tooltip-directive
```

Import Ng2Module:

```ts
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
    imports: [ TooltipModule ]
})
```

## Usage

Options can be set in the directive tag, so they have the highest priority.

```html
<span tooltip="Tooltip" placement="top" show-delay="500">Tooltip on top</span>
```

You may pass as an object:

```ts
<span tooltip="Tooltip" [options]="myOptions">Tooltip on left</span>

myOptions = {
    'placement': 'left',
    'show-delay': 500
}
```

## Properties

| name             | type                                | default | description                                 |
|------------------|-------------------------------------|---------|---------------------------------------------|
| placement        | "top", "bottom", "left", "right"    | "top"   | The position of the tooltip.                |
| show-delay       | number                              | 0       | The delay in ms before showing the tooltip. |
| hide-delay       | number                              | 300     | The delay in ms before removing the tooltip.|
| hide-delay-mobile      | number                        | 1500    | Delay in milliseconds before hiding the tooltip (for mobile devices)|
| display          | boolean                             | true    | Tooltip availability for display.           |
| display-mobile   | boolean                             | true    | Display the tooltip on mobile devices.      |
| z-index          | number                              | 0       | Z-index of the tooltip.                     |
| trigger          | "hover", "click"                    | "hover" | Specifies how the tooltip is triggered. Control the closing time with "hide-delay". |
| tooltip-class    | string                              |         | Classes to be passed to the tooltip.        |
| animation-duration | number                            | 300     | The duration controls how long the animation takes to run from start to finish. |
| theme            | "dark", "light"                     | "dark"  | Theme of tooltip background and text.       |
| shadow           | boolean                             | true    | Shadow of the tooltip.                      |
| offset           | number                              | 8       | Offset the tooltip relative to the item.    |

## Events

When you call events, the delays that are specified in the options in the directive are taken into account. Default delay before tooltip hiding is 300 milliseconds.

| Event            | Description                                                                                 |
|------------------|---------------------------------------------------------------------------------------------|
| show             | The event is called before the tooltip appears.                                             |
| shown            | The event is called after the animation of the appearance of the tooltip.                   |
| hide             | The event is called before the tooltip is hidden.                                           |
| hidden           | The event is called after the animation of the tooltip is hidden.                           |

## Methods

If you specified the directive options, they will be taken into account when calling methods. Including the delay before the appearance and hiding of the tooltip.

| Method           | Description                                                                                 |
|------------------|---------------------------------------------------------------------------------------------|
| show()           | Shows the tooltip                                                                           |
| hide()           | Hides the tooltip   