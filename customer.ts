import { CreditCard } from "./creditCard";

export class Customer {
    public firstName: string;
    public lastName: string;
    public creditCard: CreditCard;
    constructor(f: string, l: string, cr: CreditCard) {
        this.firstName = f;
        this.lastName = l;
        this.creditCard = cr;
    }
    toString(): string {
        let str = `The manager's first name is: ${this.firstName},
        the last name is: ${this.lastName},
        Credit card: ${this.creditCard.toString()}`;
        return str;
    }
    getName(): string {
        let str = `The manager's first name is: ${this.firstName},
        and his last name is: ${this.lastName}`;
        return str;
    }
}