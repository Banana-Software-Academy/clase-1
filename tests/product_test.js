const { suite, test, assert } = require('@pmoo/testy');

const Product =  require('../src/Product');
const Catalog = require('../src/Catalog');

suite('Producto' , () => {
  test('Podemos crear un producto con un nombre', () => {
    const candle = new Product('Vela', 100);
    assert.that(candle.isNamed('Vela')).isTrue();
  });

  test('Podemos crear un producto con el costo esperado', () => {
    const candle = new Product('Vela', 100);
    assert.that(candle.costs(100)).isTrue();
  });

  test('Puedo actualizar el costo de un producto', () => {
    const candle = new Product('Vela', 120);
    candle.updateCost(200);
    assert.that(candle.costs(200)).isTrue();
  });
  
  test('Un producto no puede no tener nombre', () => {
    let error;
    try {
      const candle = new Product('', 100);
    } catch(e) {
      error = e.message;
    }
    assert.that(error).isEqualTo('INVALID_NAME');
  });


  test('Un producto no puede tener un nombre que no sea string', () => {
    let error;
    try {
      const candle = new Product(5, 100);
    } catch(e) {
      error = e.message;
    }
    assert.that(error).isEqualTo('INVALID_NAME');
  });

  // test('Un producto no puede tener costo cero o negativo', () => {
  //   let error;
  //   try {
  //     const candle = new Product('Vela', -1);
  //   } catch(e) {
  //     error = e.message;
  //   }
  //   assert.that(error).isEqualTo('INVALID_COST');
  // });

  // test('Un producto puede decirme su precio si le asigno la rentabilidad esperada', () => {
  //   const candle = new Product('Vela', 120);
  //   candle.profitabilityPercentageOf(50);
  //   assert.that(candle.price()).isEqualTo(180);
  // });

  // test('Puedo listar mis productos en el formato [Nombre]:[Precio] separados por coma', () => {
  //   const smallCandle = new Product('Vela', 120);
  //   smallCandle.profitabilityPercentageOf(50);
  //   const bigCandle = new Product('Vela xl', 250);
  //   bigCandle.profitabilityPercentageOf(50);
  //   const catalog = new Catalog([smallCandle, bigCandle]);
  //   assert.that(catalog.listProductNamesWithPrices()).isEqualTo('Vela: 180, Vela xl: 375, ');
  // });

  test('Puedo saber cuantos productos tengo', () => {
    const candle = new Product('Vela', 100);
    const bigCandle = new Product('Vela xl', 200);

    const products = [candle, bigCandle];

    const catalog = new Catalog(products);
    assert.that(catalog.productQuantity()).isEqualTo(products.length);
  });

  // test('Puedo crear una venta de un producto y conocer su valor total');
});