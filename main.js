"use strict";
exports.__esModule = true;
var adress_1 = require("./adress");
var shop_1 = require("./shop");
var manager_1 = require("./manager");
var customer_1 = require("./customer");
var creditCard_1 = require("./creditCard");
var ad = new adress_1.Adress("Jerusalem", "Ben Ehuda", 12, 12345);
var sh = new shop_1.Shop("games", 150, 600, ad);
var man = new manager_1.Manager("Jonh", "Gray", "021996913", 7000, ad);
var cc = new creditCard_1.CreditCard("visa", "4580123456781234", "12/23", 336);
var cus = new customer_1.Customer("Mary", "Brown", cc);
/*function check(digits: string) {
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        let cardNum = parseInt(digits[i]);

        if ((digits.length - i) % 2 === 0) {
            cardNum = cardNum * 2;

            if (cardNum > 9) {
                cardNum = cardNum - 9;
            }
        }

        sum += cardNum;
    }

    return sum % 10 === 0;
}
check("333785988");*/
