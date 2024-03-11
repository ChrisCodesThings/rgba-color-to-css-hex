# rgba-color-to-css-hex &middot; [![Test workflow status](https://github.com/ChrisCodesThings/rgba-color-to-css-hex/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/rgba-color-to-css-hex)](https://www.npmjs.com/package/@chriscodesthings/rgba-color-to-css-hex) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Converts an RGBA color to a CSS hex color code**

## Install

```sh
npm install --save @chriscodesthings/rgba-color-to-css-hex
```

## Use

```js
import rgbaColorToCSSHex from '@chriscodesthings/rgba-color-to-css-hex';

console.log(rgbaColorToCSSHex([100, 149, 237, 0.5])); // cornflowerblue with 50% transparency
// => #6495ed7f
```

## Syntax

```js
rgbaColorToCSSHex(color);
```

### Parameters

- *color*: an array containing red, green, blue and (optional) alpha values

### Return Value

Returns the RGBA color converted to CSS hex color code.

## Description

Does what it says on the tin.