// @ts-check

import compressHex from '@chriscodesthings/compress-css-hex-color';
import * as colorTypes from '@chriscodesthings/basic-color-types';

/**
 * Converts a decimal number to a minimum 2 digit hex number
 * @param {number} n A number
 * @returns {string}
 */
function decToHexPair(n) {
    return Number(n).toString(16).padStart(2, "0");
}

/**
 * Converts a colour from RGBA format to a CSS hex colour code
 * @param {colorTypes.rgbColor | colorTypes.rgbaColor} rgba Array containing red, green, blue and (optional) alpha values
 * @returns {colorTypes.cssHexCode}
 */
export default function rgbaColorToCSSHex(rgba) {
    const hex = (
        "#"
        + decToHexPair(rgba[0])
        + decToHexPair(rgba[1])
        + decToHexPair(rgba[2])
        + (typeof rgba[3] !== 'undefined' ? decToHexPair(Math.floor(rgba[3] * 255)) : "")
    );

    return compressHex(hex);
}
