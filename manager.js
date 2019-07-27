"use strict";
exports.__esModule = true;
var Manager = /** @class */ (function () {
    function Manager(f, l, tz, sal, ad) {
        this.firstName = f;
        this.lastName = l;
        this.tz = tz;
        this.salary = sal;
        this.adress = ad;
    }
    Object.defineProperty(Manager.prototype, "tz", {
        get: function () {
            return this._tz;
        },
        set: function (t) {
            if (this.check(t)) {
                this._tz = t;
            }
            else {
                throw "this tz is not correct";
            }
        },
        enumerable: true,
        configurable: true
    });
    Manager.prototype.toString = function () {
        var str = "The manager's first name is: " + this.firstName + ",\n        the last name is: " + this.lastName + ",\n        identification number is: " + this.tz + ",\n        the salary is: " + this.salary + ",\n        the adress of the shop:\n        " + this.adress.toString();
        return str;
    };
    Manager.prototype.getName = function () {
        var str = "The manager's first name is: " + this.firstName + ",\n        and his last name is: " + this.lastName;
        return str;
    };
    Manager.prototype.check = function (digits) {
        var sum = 0;
        for (var i = 0; i < digits.length; i++) {
            var cardNum = parseInt(digits[i]);
            if ((digits.length - i) % 2 === 0) {
                cardNum = cardNum * 2;
                if (cardNum > 9) {
                    cardNum = cardNum - 9;
                }
            }
            sum += cardNum;
        }
        return sum % 10 === 0;
    };
    return Manager;
}());
exports.Manager = Manager;
