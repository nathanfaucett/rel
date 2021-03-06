var has = require("has");


module.exports = joinRow;


function joinRow(a, b) {
    var localHas = has,
        out = {},
        key;

    for (key in a) {
        if (localHas(a, key)) {
            out[key] = a[key];
        }
    }
    for (key in b) {
        if (localHas(b, key)) {
            out[key] = b[key];
        }
    }

    return out;
}
