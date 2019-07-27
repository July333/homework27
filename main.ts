import { Adress } from "./adress";
import { Shop } from "./shop";
import { Manager } from "./manager";
import { Customer } from "./customer";
import { CreditCard } from "./creditCard";

var ad = new Adress("Jerusalem", "Ben Ehuda", 12, 12345);
var sh = new Shop("games", 150, 600, ad);
var man = new Manager("Jonh", "Gray", "021996913", 7000, ad);
var cc = new CreditCard("visa", "4580123456781234", "12/23", 336);
var cus = new Customer("Mary", "Brown", cc);
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
