# rgba-color-to-css-hex <br> [![Test workflow status](https://github.com/ChrisCodesThings/rgba-color-to-css-hex/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/rgba-color-to-css-hex)](https://www.npmjs.com/package/@chriscodesthings/rgba-color-to-css-hex) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Converts an RGB or RGBA color to a CSS hex color code**

## Description

Converts a color given as red, green and blue values to a CSS hex color code.

### See...
- [Install/Usage](#install "Install and Usage")
- [Types](#types "Types")
- [Syntax](#syntax "Syntax")
- [Examples](#examples "Examples")
- [See Also](#see-also "See Also")

---

## Install

```sh
npm install --save @chriscodesthings/rgba-color-to-css-hex
```

## Usage

```js
import rgbaColorToCSSHex from '@chriscodesthings/rgba-color-to-css-hex';

console.log(rgbaColorToCSSHex([100, 149, 237, 0.5])); // cornflowerblue with 50% transparency
// => #6495ed7f
```

## Types

These types are made available:

```ts
export type rgbColor = [number, number, number];
export type rgbaColor = [number, number, number, number];
```

### TypeScript

To use the types in your TypeScript project:

```js
import type { rgbColor, rgbaColor } from '@chriscodesthings/rgba-color-to-css-hex';

const myColor: rgbColor | rgbaColor = [100, 149, 237, 1];
```

### JavaScript

You can also use types in JavaScript with JSDoc with `@typedef` imports:

```js
/**
 * @typedef {import('@chriscodesthings/rgba-color-to-css-hex').rgbColor} rgbColor
 * @typedef {import('@chriscodesthings/rgba-color-to-css-hex').rgbaColor} rgbaColor
 */

/** @type {rgbColor | rgbaColor} */
const myColor = [100, 149, 237, 1];
```

## Syntax

```js
rgbaColorToCSSHex([r, g, b, (a)]);
```

### Parameters

- *r, g, b*: red, green and blue values in the range 0-255
- *a* (optional): alpha value in the range 0-1

### Return Value

Returns a string containing a CSS hex color code converted from the RGBA values.

## Examples

```js
// from user input
function setBackground(r, g, b) {
    document.body.style.background = rgbaColorToCSSHex([r, g, b]);
} 
```

## See Also...

- [**color-looks-like-rgba**: Determine if a set of values could be an RGB or RGBA color](https://github.com/ChrisCodesThings/color-looks-like-rgba "Determine if a set of values could be an RGB or RGBA color")
- [**random-rgb-color**: Generates a random color in RGB format](https://github.com/ChrisCodesThings/random-rgb-color "Generates a random color in RGB format")
- [**color-object**: Simple, lightweight class to store and manipulate a color, and convert between formats](https://github.com/ChrisCodesThings/color-object "Simple, lightweight class to store and manipulate a color, and convert between formats")
