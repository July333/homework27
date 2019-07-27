export class Adress {
    public city: string;
    public street: string;
    public houseNumber: number;
    public index: number;
    constructor(c: string, st: string, ho: number, ind: number) {
        this.city=c;
        this.street=st;
        this.houseNumber=ho;
        this.index=ind;
    }
    toString(): string {
        let str = `The city name: ${this.city},
        the street name: ${this.street} ${this.houseNumber},
        index: ${this.index}`;
        return str;
    }
}