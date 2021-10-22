const { suite, test, assert } = require('@pmoo/testy');

const Product =  require('../src/Product');

suite('Producto' , () => {
  test('Podemos crear un producto con un nombre', () => {
    const product = new Product('Vela', 100);
    assert.that(product.isNamed('Vela')).isTrue();
  });

  test('Podemos crear un producto con el costo esperado', () => {
    const product = new Product('Vela', 100);
    assert.that(product.costs(100)).isTrue();
  });
  
  test('Puedo actualizar el costo de un producto');
  
  test('Un producto no puede no tener nombre');

  test('Un producto no puede tener costo cero o negativo');

  test('Un producto puede decirme su precio si le asigno la rentabilidad esperada');

  test('Puedo listar mis productos');
});