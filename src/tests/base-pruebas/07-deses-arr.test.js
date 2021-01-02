import { retornaArreglo, usState } from "../../base/07-deses-arr"

describe('Pruebas en 07-desesctructuracion arr', () => {
    
    test('Devuelve un string y un numero', () => {

        const [letras,numeros] = retornaArreglo();
        // expect(arr).toEqual( ['ABC',123]);
        expect(letras).toBe("ABC");
        expect(numeros).toBe(123);
        expect( typeof letras ).toBe('string');
        expect( typeof numeros ).toBe('number');


        
    })
    
})
