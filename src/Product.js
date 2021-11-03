class Product {

  constructor(aName, aCost) {
    if(aName == '' || typeof aName != 'string') {
      throw new Error('INVALID_NAME');
    }
    this.name = aName;
    this.cost = aCost;
  }

  isNamed(aName) {
    return aName == this.name;
  }

  costs(aCost) {
    return aCost == this.cost;
  }

  updateCost(aNewCost) {
    this.cost = aNewCost;
  }

  profitabilityPercentageOf(aPercentage) {
    this.profitabilityPercentage = aPercentage;
  }

  price() {
    return this.cost * (1 + this.profitabilityPercentage / 100);
  }

  inListFormat() {
    return this.name + ': ' + this.price();
  }
}

module.exports = Product;