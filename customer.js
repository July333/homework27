"use strict";
exports.__esModule = true;
var Customer = /** @class */ (function () {
    function Customer(f, l, cr) {
        this.firstName = f;
        this.lastName = l;
        this.creditCard = cr;
    }
    Customer.prototype.toString = function () {
        var str = "The manager's first name is: " + this.firstName + ",\n        the last name is: " + this.lastName + ",\n        Credit card: " + this.creditCard.toString();
        return str;
    };
    Customer.prototype.getName = function () {
        var str = "The manager's first name is: " + this.firstName + ",\n        and his last name is: " + this.lastName;
        return str;
    };
    return Customer;
}());
exports.Customer = Customer;
