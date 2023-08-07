const { calcularMDC } = require('./CalculoMDC');

describe('Função calcularMDC', () => {
    test('Calcula o MDC corretamente para diferentes pares de números', () => {
        expect(calcularMDC(72, 108)).toBe(36);
        expect(calcularMDC(50, 75)).toBe(25);
        expect(calcularMDC(18, 24)).toBe(6);
    });

    test('Calcula o MDC de um número com zero resulta no próprio número', () => {
        expect(calcularMDC(72, 0)).toBe(72);
        expect(calcularMDC(0, 108)).toBe(108);
    });

    test('Calcula o MDC de números negativos corretamente', () => {
        expect(calcularMDC(-72, 108)).toBe(36);
        expect(calcularMDC(-50, -75)).toBe(25);
    });
});

