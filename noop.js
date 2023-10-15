"use strict";
exports.__esModule = true;
exports.randomAlpha = void 0;
var randomstring = require("randomstring");
function randomAlpha() {
    return randomstring.generate({ length: 12, charset: 'alphabetic' });
}
exports.randomAlpha = randomAlpha;
