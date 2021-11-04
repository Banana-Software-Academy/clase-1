class Sale {

  constructor(aClientName, aCart) {
    this.clientName = aClientName;
    this.cart = aCart;
  }

  totalValue() {
    let total = 0;
    this.cart.forEach((aProduct) => {
      total = total + aProduct.price();
    });
    return total;
  }


}

module.exports = Sale;