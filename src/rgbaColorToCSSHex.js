import looksLikeRGBA from '@chriscodesthings/color-looks-like-rgba';
import compressHex from '@chriscodesthings/compress-css-hex-color';

function decToHexPair(n) {
    return Number(n).toString(16).padStart(2, "0");
}

export default function (rgba) {
    if (!looksLikeRGBA(rgba)) {
        return;
    }

    const hex = (
        "#"
        + decToHexPair(rgba[0])
        + decToHexPair(rgba[1])
        + decToHexPair(rgba[2])
        + (typeof rgba[3] !== 'undefined' ? decToHexPair(Math.floor(rgba[3] * 255)) : "")
    );

    console.log(rgba, "is", hex);
    return compressHex(hex);
}
