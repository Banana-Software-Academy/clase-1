class Catalog {

  constructor(someProducts) {
    this.products = someProducts;
  }

  productQuantity() {
    return this.products.length;
  }

}

module.exports = Catalog;