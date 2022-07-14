import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe retornar un heroe', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
        done(); // Para funciones asincronas
      })
  })

  test('getHeroeByIdAsync debe retornar un error si el heroe no existe', (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then( hero => { 
        expect(hero).toBeFalsy(); // Esperaria que esto nunca pase en esta prueba, por eso debe fallar
        done();
      })
      .catch(error => {
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
        done()
      })
  })

})