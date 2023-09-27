"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var product_1 = require("./product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new product_1.Product(1, "Iphone 15", "Telefon", 90000), new product_1.Product(2, "Iphone 14", "Telefon", 75000), new product_1.Product(3, "Iphone 13", "Telefon", 40000), new product_1.Product(4, "Iphone 12", "Telefon", 32000), new product_1.Product(5, "Iphone 11", "Telefon", 18000));
    }
    SimpleDataSource.prototype.getProducs = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
// let p = new SimpleDataSource(); Dizi oluşturulacak
