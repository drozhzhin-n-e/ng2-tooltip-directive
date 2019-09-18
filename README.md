# Tooltip for Angular

[![Build Status](https://travis-ci.org/drozhzhin-n-e/ng2-tooltip-directive.svg?branch=master)](https://travis-ci.org/drozhzhin-n-e/ng2-tooltip-directive)

## Installation

Install the npm package.

    npm i ng2-tooltip-directive
        
Import `Ng2Module`:

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

```html
<span tooltip="Tooltip" [options]="myOptions">Tooltip on left</span>
```
```ts
myOptions = {
    'placement': 'left',
    'show-delay': 500
}
```

You can pass HTML as content :

```html
<span tooltip="<p>Hello i'm a <strong>bold</strong> text !</p>">
  Tooltip with HTML content
</span>
```

```html
<ng-template #HtmlContent>
  <p>Hello i'm a <strong>bold</strong> text!</p>
</ng-template>

<span [tooltip]="HtmlContent" content-type="template">
  Tooltip with template content
</span>
```

## Set default values

Create a file with your settings, for example:
```ts
import { TooltipOptions } from 'ng2-tooltip-directive';

export const MyDefaultTooltipOptions: TooltipOptions = {
  'show-delay': 500
}
```
    
And pass your parameters when importing the module:
```ts
import { TooltipModule, TooltipOptions } from 'ng2-tooltip-directive';
import { MyDefaultTooltipOptions } from './my-default-options';
 
@NgModule({
    imports: [ 
      TooltipModule.forRoot(MyDefaultTooltipOptions as TooltipOptions)
    ]
})
```

## Properties

| name             | type                                | default | description                                 |
|------------------|-------------------------------------|---------|---------------------------------------------|
| placement        | "top", "bottom", "left", "right"    | "top"   | The position of the tooltip.                |
| show-delay       | number                              | 0       | The delay in ms before showing the tooltip. |
| hide-delay       | number                              | 300     | The delay in ms before removing the tooltip. |
| hide-delay-mobile      | number                        | 1500    | Delay in milliseconds before hiding the tooltip (for mobile devices). |
| display          | boolean                             | true    | Tooltip availability for display.           |
| display-mobile   | boolean                             | true    | Display the tooltip on mobile devices.      |
| z-index          | number                              | 0       | Z-index of the tooltip.                     |
| trigger          | "hover", "click"                    | "hover" | Specifies how the tooltip is triggered. Control the closing time with "hide-delay". |
| tooltip-class    | string                              |         | Classes to be passed to the tooltip.        |
| animation-duration | number                            | 300     | The duration controls how long the animation takes to run from start to finish. |
| theme            | "dark", "light"                     | "dark"  | Theme of tooltip background and text.       |
| shadow           | boolean                             | true    | Shadow of the tooltip.                      |
| offset           | number                              | 8       | Offset the tooltip relative to the item.    |
| max-width        | number                              | 200     | Maximum width of the tooltip.               |
| content-type     | "string", "html', "template"        | "string" | The content type passed to the tooltip      |
| hideDelayAfterClick | number | 2000 | Tooltip hiding delay for "click" trigger. |

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
| hide()           | Hides the tooltip                                                                           |

## Demo
http://crystalui.org/components/tooltip

## Sponsors

We use Browserstack for cross-browser testing.

[![Browserstack](http://crystalui.org/assets/img/browserstack-logo.png)](http://browserstack.com/)
