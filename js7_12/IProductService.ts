import { Product } from "./product";


export interface IProductService {
    getById(id:number): Product;
    getProcuts(): Array<Product>;
    saveProcut(product: Product):void;
    deleteProduct(product: Product): void;
}