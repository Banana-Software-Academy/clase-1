class Catalog {

  constructor(someProducts) {
    this.products = someProducts;
  }

  productQuantity() {
    return this.products.length;
  }

  findProductByName(aName) {
    let itemFound;
    
    this.products.forEach((item) => {
      if(item.isNamed(aName)) {
        itemFound = item;
      }  
    });

    this.assertProductWasFound(itemFound);
    return itemFound;
  }

  assertProductWasFound(productFound) {
    if (productFound == undefined) {
      throw new Error('PRODUCT_NOT_FOUND');
    }
  }

  toSend() {
    let productsToSend = [];
    this.products.forEach((product) => {
      productsToSend.push(product.toSend())
    });
    return productsToSend;
  }
}

module.exports = Catalog;