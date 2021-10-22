class Product {

  constructor(aName, aCost) {
    this.name = aName;
    this.cost = aCost;
  }
  
  isNamed(aName) {
    return aName == this.name;
  }

  costs(aCost) {
    return aCost == this.cost;
  }
}

module.exports = Product;