var randomstring = require("randomstring");

export function randomAlpha() {
    return randomstring.generate({length: 12, charset: 'alphabetic'});
}
