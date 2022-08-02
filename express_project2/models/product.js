const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
       products.push(this); 
    } // Adds the object to the products list

    static fetchAll() {
        return products;
    } 

}