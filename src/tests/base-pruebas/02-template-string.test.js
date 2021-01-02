import '@testing-library/jest-dom';

import {getSaludo} from "../../base/02-template-string"

describe( 'Pruebas template-string', () => {

    test('prueba en getSaludo ', () => {
      
        const nombre = "Gonzalo"
        const saludo = getSaludo(nombre);
        
        expect( saludo  ).toBe( 'Hola '+nombre);
        console.log('Nombre: '+nombre+'  ||||| Saludo: '+saludo);

    })
    
    //defecto de get saludo

    test('Valor por defecto de getsaludo ', () => {
    
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Gonzalo');
        console.log('El valor por defecto es: '+saludo.substring(5));

    }
    )
    

} )