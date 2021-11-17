class Sale {

  constructor(aClientName, aCart) {
    this.clientName = aClientName;
    this.cart = aCart;
  }

  totalValue() {
    let total = 0;
    this.cart.forEach((aProduct) => {
      total = this.addPriceToTotal(total, aProduct);
    });
    return total;
  }

  addPriceToTotal(aTotal, aProduct) {
    aTotal = aTotal + aProduct.price();
    return aTotal;
  }
}

module.exports = Sale;