export class CreditCard {
    public typeOfCR: string;
    private _numOfCR!: string;
    get numOfCR(): string {
        return this._numOfCR;
    }
    set numOfCR(num: string) {
        if (this.check(num)) {
            this._numOfCR = num;
        }
        else {
            throw "this card number is not correct";
        }
    }
    public ExDate: string;
    public CVC: number;
    constructor(tc: string, num: string, ed: string, cvc: number) {
        this.typeOfCR = tc;
        this.numOfCR = num;
        this.ExDate = ed;
        this.CVC = cvc;
    }
    toString(): string {
        let str = `The type of your credit card is: ${this.typeOfCR},
        your credit card's number is: ${this.numOfCR},
        the experation date is: ${this.ExDate},
        the CVC is: ${this.CVC}`;
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