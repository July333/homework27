"use strict";
exports.__esModule = true;
var Adress = /** @class */ (function () {
    function Adress(c, st, ho, ind) {
        this.city = c;
        this.street = st;
        this.houseNumber = ho;
        this.index = ind;
    }
    Adress.prototype.toString = function () {
        var str = "The city name: " + this.city + ",\n        the street name: " + this.street + " " + this.houseNumber + ",\n        index: " + this.index;
        return str;
    };
    return Adress;
}());
exports.Adress = Adress;
