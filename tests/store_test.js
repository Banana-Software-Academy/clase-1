const { suite, test, assert } = require('@pmoo/testy');
const Product =  require('../src/Product');
const Catalog = require('../src/Catalog');
// const Sale = require('../src/Sale');
const Store = require('../src/Store');

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

  test('Quiero comprar un producto que no existe, y ..... qué pasa?', () => {
    const catalog = generateCatalogWithAProduct();
    const store = new Store(catalog);

    store.sellProductNamed('Vela234');

    assert.that(store.numberOfSales()).isEqualTo(0);
  });
});

function generateCatalogWithAProduct() {
  const candle = new Product('Vela', 100);
  candle.profitabilityPercentageOf(50);

  const products = [candle];
  const catalog = new Catalog(products);
  return catalog;
}

