import { ProductService } from './ProductService';
import { Product } from './product';

let _productService = new ProductService();

let result;


result = _productService.getById(2);

let p = new Product();

p.id = 2;
p.name = "Iphone 7";
p.category = "Telefon"
p.price = 5000;

_productService.saveProcut(p);
// _productService.deleteProduct(result);
result = _productService.getProcuts();

console.log(result);