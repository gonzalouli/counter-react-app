
describe('Pruebas en el archivo demo.test.js', () => {

    test ( 'strings-iguales' , () => {
        //inicializacion
        const msg = "Hola mundo";
        //estimulo
        const copia = `Hola mundo`;
        //obsevación
        expect(msg).toBe(copia); //se espera que msg sea copia
        }
    )
}
)

