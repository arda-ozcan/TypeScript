import { Product } from "./product";

export class SimpleDataSource {
    private products: Array<Product>

    constructor() {
        this.products = new Array<Product> (
            new Product(1,"Iphone 15","Telefon",90000),
            new Product(2,"Iphone 14","Telefon",75000),
            new Product(3,"Iphone 13","Telefon",40000),
            new Product(4,"Iphone 12","Telefon",32000),
            new Product(5,"Iphone 11","Telefon",18000),
        )
    }

    getProducs(): Product[] {
        return this.products;
    }
}

// let p = new SimpleDataSource(); Dizi oluşturulacak