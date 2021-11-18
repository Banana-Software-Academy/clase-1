const Sale = require("./Sale");

class Store {
  constructor(aCatalog) {
    this._catalog = aCatalog;
    this.sales = [];
  }

  productQuantity() {
    return this._catalog.productQuantity();
  }

  sellProductNamed(aProductName) {
    const productToBuy = this._catalog.findProductByName(aProductName);
    const aCart = [productToBuy];

    const aSale = new Sale('', aCart);
    this.sales.push(aSale);
  }

  numberOfSales() {
    return this.sales.length;
  }
}

module.exports = Store;
