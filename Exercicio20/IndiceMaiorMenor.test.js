const encontrarIndicesMaiorMenor = require('./IndiceMaiorMenor');

describe('Função encontrarIndicesMaiorMenor', () => {
  test('Encontra os índices do maior e menor valor em um array', () => {
    const array1 = [12, 45, 6, 89, 32, 18];
    const indices1 = encontrarIndicesMaiorMenor(array1);
    expect(indices1.indiceMaior).toBe(3);
    expect(indices1.indiceMenor).toBe(2);

    const array2 = [5, 5, 5, 5, 5];
    const indices2 = encontrarIndicesMaiorMenor(array2);
    expect(indices2.indiceMaior).toBe(0);
    expect(indices2.indiceMenor).toBe(0);
  });

  test('Lança um erro para um array vazio', () => {
    expect(() => {
      encontrarIndicesMaiorMenor([]);
    }).toThrow('O parâmetro deve ser um array não vazio.');
  });
});
