class Product {
	static #products = [];
  
	constructor(name, description) {
	  this.name = name;
	  this.description = description;
	}
  
	static getAll() {
	  return Product.#products;
	}
  
	static add(product) {
	  Product.#products.push(product);
	}
  
	static findByName(name) {
	  return Product.#products.find(p => p.name === name);
	}
  
	static deleteByName(name) {
	  Product.#products = Product.#products.filter(p => p.name !== name);
	}
  
	static getLast() {
	  return Product.#products.at(-1);
	}
  }
  
  module.exports = Product;
  