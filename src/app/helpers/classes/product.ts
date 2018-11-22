export class Product {
    constructor(
    public category: 'alcohol' | 'electronic' | 'instrument',
    public name: string,
    public price: number
    ){};
}
