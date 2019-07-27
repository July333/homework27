"use strict";
exports.__esModule = true;
var CreditCard = /** @class */ (function () {
    function CreditCard(tc, num, ed, cvc) {
        this.typeOfCR = tc;
        this.numOfCR = num;
        this.ExDate = ed;
        this.CVC = cvc;
    }
    Object.defineProperty(CreditCard.prototype, "numOfCR", {
        get: function () {
            return this._numOfCR;
        },
        set: function (num) {
            if (this.check(num)) {
                this._numOfCR = num;
            }
            else {
                throw "this card number is not correct";
            }
        },
        enumerable: true,
        configurable: true
    });
    CreditCard.prototype.toString = function () {
        var str = "The type of your credit card is: " + this.typeOfCR + ",\n        your credit card's number is: " + this.numOfCR + ",\n        the experation date is: " + this.ExDate + ",\n        the CVC is: " + this.CVC;
        return str;
    };
    CreditCard.prototype.check = function (digits) {
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
    return CreditCard;
}());
exports.CreditCard = CreditCard;
