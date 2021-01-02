// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( {saludo, subtitulo }) => {


   
        return ( 
        // <Fragment> 
        //  {/* //evitar tantos divs  */}
        // <h1>HolaMundo</h1>
        // <h2>Esta es mi primera app</h2>
        // </Frasgment>

     <> 
        <h1> {saludo} </h1> 
        <h2> {subtitulo} </h2>
         {/* fragment reducido  */}
        {/* <pre>{JSON.stringify(persona,null,3)}</pre> */}
        {/* {var} para pasar variable */}
        <p>Esta es mi primera app</p>
    </>

    )
}

PrimeraApp.defaultProps = { //props por defecto
    subtitulo: 'Soy un subtitulo'
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired, //string, y obligatorio
    subtitulo: PropTypes.string
}

export default PrimeraApp


