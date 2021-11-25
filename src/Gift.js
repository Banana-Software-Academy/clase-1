class Gift {
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

  price() {
    return 0;
  }
}

module.exports = Gift;