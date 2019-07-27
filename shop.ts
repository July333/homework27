import { Adress } from './adress'

export class Shop {
    public typeOfProducts: string;
    public numberOfIns: number;
    public mr: number;
    public adress: Adress;
    constructor(t: string, n: number, mr: number, ad: Adress) {
        this.typeOfProducts = t;
        this.numberOfIns = n;
        this.mr = mr;
        this.adress = ad;
    } 
    toString(): string {
        let str = `The type of products is: ${this.typeOfProducts},
        the number of products: ${this.numberOfIns},
        the size of the shop: ${this.mr},
        the adress of the shop:
        ${this.adress.toString()}`;
        return str;
    }
    IfBig(): boolean {
        if (this.mr > 500) {
            return true;
        }
        else {
            return false;
        }
    }
}