

export const retornaArreglo = () =>{
    return ['ABC', 123];
}

// const [ letras, numeros ] = retornaArreglo(); 

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
export const usState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = usState( 'Goku' );

setNombre();





