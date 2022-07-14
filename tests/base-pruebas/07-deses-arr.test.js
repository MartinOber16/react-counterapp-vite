import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {
  test('debe retornar un string y un numero', () => {
    const retorno = retornaArreglo();
    const [letters, numbers] = retorno;

    expect(retorno).toEqual(['ABC', 123])

    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    expect(letters).toStrictEqual(expect.any(String));
    expect(numbers).toStrictEqual(expect.any(Number));

  })
})