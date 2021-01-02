import '@testing-library/jest-dom'
import { getHeroeById } from '../../base/08-imp-exp';
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
    test('Debe de devolver un heroe async', (done) => {  //done  hará que terminemos las pruebas en el
                                                        //bloque con la llamada a este parametro
        
        const id = 1;

        getHeroeByIdAsync(id).then(
            heroe => {

                expect(heroe).toEqual(heroes[0]);//esta tarea debe ejecutarse, sino terminara sin errores antes de hacerla
                done();
            }
        );
    });
   
    test('Error si heroe id no existe ', (done) => {
        
        const id = -1;
        
        getHeroeById(id)
            .catch ( error => {
                expect(error).toBe('No se pudo encontrar el héroe');
            });
            done();

    })
    


})
