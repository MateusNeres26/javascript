const encontrarIndicesMaiorMenor = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("O parâmetro deve ser um array não vazio.");
  }

  let indiceMaior = 0;
  let indiceMenor = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMaior]) {
      indiceMaior = i;
    } else if (array[i] < array[indiceMenor]) {
      indiceMenor = i;
    }
  }

  return { indiceMaior, indiceMenor };
};

module.exports = encontrarIndicesMaiorMenor;
