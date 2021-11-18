class Catalog {

  constructor(someProducts) {
    this.products = someProducts;
  }

  productQuantity() {
    return this.products.length;
  }

  findProductByName(aProductName) {
    let productFound;
    
    this.products.forEach((aProduct) => {
      if(aProduct.isNamed(aProductName)) {
        productFound = aProduct;
      }  
    });

    return productFound;
  }
}

module.exports = Catalog;