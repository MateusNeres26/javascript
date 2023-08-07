const somaMultiplos5e7AbaixoDe1000 = require('./SomaMultiplos');

describe('Função somaMultiplos5e7AbaixoDe1000', () => {
  test('Soma corretamente os múltiplos de 5 ou 7 abaixo de 1000', () => {
    expect(somaMultiplos5e7AbaixoDe1000()).toBe(156361);
  });
});

