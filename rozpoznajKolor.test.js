const assert = require('assert');
const rozpoznajKolor = require('./rozpoznajKolor');


describe('Rozpoznawanie kolorów', function() {
  it('Powinno rozpoznać kolor czerwony (#ff0000)', function() {
    assert.strictEqual(rozpoznajKolor("#ff0000"), "czerwony");
  });

  it('Powinno rozpoznać kolor zielony (#00ff00)', function() {
    assert.strictEqual(rozpoznajKolor("#00ff00"), "zielony");
  });

  it('Powinno rozpoznać kolor niebieski (#0000ff)', function() {
    assert.strictEqual(rozpoznajKolor("#0000ff"), "niebieski");
  });

  it('Powinno rozpoznać kolor biały (#ffffff)', function() {
    assert.strictEqual(rozpoznajKolor("#ffffff"), "biały");
  });

  it('Powinno rozpoznać kolor czarny (#000000)', function() {
    assert.strictEqual(rozpoznajKolor("#000000"), "czarny");
  });

  it('Powinno rozpoznać kolor różowy (#ff00ff) jako "Nieznany kolor"', function() {
    assert.strictEqual(rozpoznajKolor("#ff00ff"), "Nieznany kolor");
  });

  it('Powinno rozpoznać kolor szary (#808080) jako "Nieznany kolor"', function() {
    assert.strictEqual(rozpoznajKolor("#808080"), "Nieznany kolor");
  });

  it('Powinno rozpoznać kolor brązowy (#964B00) jako "Nieznany kolor"', function() {
    assert.strictEqual(rozpoznajKolor("#964B00"), "Nieznany kolor");
  });

  it('Powinno rozpoznać kolor żółty (#ffff00) jako "Nieznany kolor"', function() {
    assert.strictEqual(rozpoznajKolor("#ffff00"), "Nieznany kolor");
  });

  it('Powinno rozpoznać kolor pomarańczowy (#ffa500) jako "Nieznany kolor"', function() {
    assert.strictEqual(rozpoznajKolor("#ffa500"), "Nieznany kolor");
  });
});
