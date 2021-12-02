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

    this.createSaleWithCart(aCart);
  }

  createSaleWithCart(aCart) {
    const aSale = new Sale('', aCart);
    this.sales.push(aSale);
  }

  numberOfSales() {
    return this.sales.length;
  }

  totalEarn() {
    let total = 0;
    this.sales.forEach((aSale) => {
      total = total + aSale.totalValue();
    });

    return total;
  }

  sellProductsNamed(productNames) {
    let aCart = [];

    productNames.forEach((aProductName) => {
      const productToBuy = this._catalog.findProductByName(aProductName);
      aCart.push(productToBuy);
    });

    this.createSaleWithCart(aCart);
  }

  jsonCatalog() {
    return JSON.stringify(this._catalog.toSend());
  }
}

module.exports = Store;
