import { Adress } from "./adress";

export class Manager {
    public firstName: string;
    public lastName: string;
    private _tz!: string;
    get tz(): string {
        return this._tz;
    }
    set tz(t: string) {
        if (this.check(t)) {
            this._tz = t;
        }
        else {
            throw "this tz is not correct";
        }
    }
    public salary: number;
    public adress: Adress;
    constructor(f: string, l: string, tz: string, sal: number, ad: Adress) {
        this.firstName = f;
        this.lastName = l;
        this.tz = tz;
        this.salary = sal;
        this.adress = ad;
    }
    toString(): string {
        let str = `The manager's first name is: ${this.firstName},
        the last name is: ${this.lastName},
        identification number is: ${this.tz},
        the salary is: ${this.salary},
        the adress of the shop:
        ${this.adress.toString()}`;
        return str;
    }
    getName(): string {
        let str = `The manager's first name is: ${this.firstName},
        and his last name is: ${this.lastName}`;
        return str;
    }
    private check(digits: string): boolean {
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
}