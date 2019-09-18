export const defaultOptions = {
	'placement': 'top',
	'contentType': 'string',
	'showDelay': 0,
	'hideDelay': 300,
	'hideDelayMobile': 1500,
	'zIndex': 0,
	'animationDuration': 300,
	'animationDurationDefault': 300,
	'trigger': 'hover',
	'tooltipClass': '',
	'display': true,
	'displayMobile': true,
	'shadow': true,
	'theme': 'dark',
	'offset': 8,
	'maxWidth': '',
	'id': false,
	'hideDelayAfterClick': 2000
}

export const backwardCompatibilityOptions = {
    'delay': 'showDelay',
    'show-delay': 'showDelay',
    'hide-delay': 'hideDelay',
    'hide-delay-mobile': 'hideDelayMobile',
    'z-index': 'zIndex',
    'animation-duration': 'animationDuration',
    'animation-duration-default': 'animationDurationDefault',
    'tooltip-class': 'tooltipClass',
    'display-mobile': 'displayMobile',
    'max-width': 'maxWidth'
}