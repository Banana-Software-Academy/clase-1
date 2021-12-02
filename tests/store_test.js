const { suite, test, assert } = require('@pmoo/testy');
const Product =  require('../src/Product');
const Catalog = require('../src/Catalog');
const Store = require('../src/Store');
const Gift = require('../src/Gift');

suite('Store', () => {
  // Crear un catálogo
  // Obtener los productos de un catálogo
  // Crear un carrito 
  // Agregar uno o más productos al carrito
  // Crear la venta! Cerramos el carrito?
  // Donde guardamos las ventas que se van haciendo?

  test('Puedo tener un objeto que tenga un catalogo de productos para vender', () => {
    const catalog = generateCatalogWithAProduct();
    const store = new Store(catalog);

    assert.that(store.productQuantity()).isEqualTo(catalog.productQuantity());
  });

  test('Una tienda puede decirme la cantidad total de ventas realizadas', () => {
    const catalog = generateCatalogWithAProduct();
    const store = new Store(catalog);
    
    store.sellProductNamed('Vela');

    assert.that(store.numberOfSales()).isEqualTo(1);
  });

  test('En una tienda puedo vender más de un producto', () => {
    const catalog = generateCatalogWithAProduct();
    const store = new Store(catalog);

    store.sellProductNamed('Vela');
    store.sellProductNamed('Vela');

    assert.that(store.numberOfSales()).isEqualTo(2);
  });

  test('Store lanza PRODUCT_NOT_FOUND si intento vender un producto que no existe', () => {
    let error;
    const catalog = generateCatalogWithAProduct();
    const store = new Store(catalog);

    try {
      store.sellProductNamed('Vela234');
    } catch (anError) {
      error = anError.message;
    }

    assert.that(error).isEqualTo('PRODUCT_NOT_FOUND');
    assert.that(store.numberOfSales()).isEqualTo(0);
  });

  test('Puedo vender productos y regalos', () => {
    const aGift = new Gift('Regalito', 100);
    const candle = new Product('Vela', 100);

    const items = [aGift, candle];
    const catalog = new Catalog(items);
    const store = new Store(catalog);

    store.sellProductNamed('Regalito');

    assert.that(store.numberOfSales()).isEqualTo(1);
    assert.that(store.totalEarn()).isEqualTo(0);
  });

  test('Las ventas de regalos no suman ingresos', () => {
    const aGift = new Gift('Regalito', 100);
    const candle = new Product('Vela', 100);
    candle.profitabilityPercentageOf(50);
    
    const items = [aGift, candle];
    const catalog = new Catalog(items);
    const store = new Store(catalog);

    store.sellProductNamed('Regalito');
    store.sellProductNamed('Vela');

    assert.that(store.numberOfSales()).isEqualTo(2);
    assert.that(store.totalEarn()).isEqualTo(candle.price() + aGift.price());
  });

    test('Puedo vender más de un producto', () => {
      const bigCandle = new Product('Vela XL', 150);
      bigCandle.profitabilityPercentageOf(50);
      const candle = new Product('Vela', 100);
      candle.profitabilityPercentageOf(50);
      
      const catalog = new Catalog([bigCandle, candle]);
      const store = new Store(catalog);

      const productNamesToBuy = ['Vela XL', 'Vela'];
      store.sellProductsNamed(productNamesToBuy);

      assert.that(store.numberOfSales()).isEqualTo(1);
      assert.that(store.totalEarn()).isEqualTo(candle.price() + bigCandle.price());
    });

    test('Qué pasa si intento vender más de un producto y uno no existe en el catálogo', () => {
      const bigCandle = new Product('Vela XL', 150);
      bigCandle.profitabilityPercentageOf(50);
      const candle = new Product('Vela', 100);
      candle.profitabilityPercentageOf(50);
      
      const catalog = new Catalog([bigCandle, candle]);
      const store = new Store(catalog);

      const productNamesToSell = ['Vela XL', 'Pelota'];
      let error;
      try {
        store.sellProductsNamed(productNamesToSell);
      } catch(e) {
        error = e.message;
      }
      assert.that(store.numberOfSales()).isEqualTo(0);
      assert.that(error).isEqualTo('PRODUCT_NOT_FOUND');
    });

    test('....', () => {
      const bigCandle = new Product('Vela XL', 150);
      bigCandle.profitabilityPercentageOf(100);
      const candle = new Product('Vela', 100);
      candle.profitabilityPercentageOf(100);
      
      const catalog = new Catalog([bigCandle, candle]);
      const store = new Store(catalog);

      const jsonCatalogToSend = store.jsonCatalog();

      assert.that(jsonCatalogToSend).isEqualTo(JSON.stringify([
        {name: 'Vela XL', cost: 150, price: bigCandle.price()},
        {name: 'Vela', cost: 100, price: candle.price()},
      ]))
    });
});

function generateCatalogWithAProduct() {
  const candle = new Product('Vela', 100);
  candle.profitabilityPercentageOf(50);

  const products = [candle];
  const catalog = new Catalog(products);
  return catalog;
}

