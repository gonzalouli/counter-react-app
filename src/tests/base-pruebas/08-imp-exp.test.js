import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe('Pruebas 08-importacion-exportacion', () => {
    
    test('devuelve el heroe por su id', () => {
        
        const id = 1;
        const heroId = getHeroeById(id);
        
        //console.log(heroId);
        //se puede comprobar con un for
        const heroedata = heroes.find( h => h.id ===id);

        expect(heroId).toEqual(heroedata);


    })
    //id desconocido
    test('devuelve undef el heroe por su id no existe ', () => {
        
        const id = -1;
        const heroId = getHeroeById(id);
        
        expect(heroId).toBe(undefined);
        

    })

    test('devuelve los heroes por su dueño', () => {
        
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        const heroesdata = hero.filter( h => h.owner === owner )

        expect(hero).toEqual(heroesdata);

    })
    
    test('devuelve los dos primeros heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);

        expect(hero.length).toBe(2);

    })
    
})
