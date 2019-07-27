"use strict";
exports.__esModule = true;
var Shop = /** @class */ (function () {
    function Shop(t, n, mr, ad) {
        this.typeOfProducts = t;
        this.numberOfIns = n;
        this.mr = mr;
        this.adress = ad;
    }
    Shop.prototype.toString = function () {
        var str = "The type of products is: " + this.typeOfProducts + ",\n        the number of products: " + this.numberOfIns + ",\n        the size of the shop: " + this.mr + ",\n        the adress of the shop:\n        " + this.adress.toString();
        return str;
    };
    Shop.prototype.IfBig = function () {
        if (this.mr > 500) {
            return true;
        }
        else {
            return false;
        }
    };
    return Shop;
}());
exports.Shop = Shop;
