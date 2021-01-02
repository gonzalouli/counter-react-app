import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Counterapp = ({value = 10}) => {
    
    const [counter, setcounter ] = useState( value ); //HOOKS var nombre y funcion setter


    //handle add
    const handleadd = () => setcounter( counter + 1 );
        ///setcounter( (counter) => counter +1 )
    
    const handleless = () => setcounter( counter -1 )
    
    const handlereset = () =>  setcounter( value )
    

    return(
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick = { handleadd } >+1</button>
        <button onClick = { handlereset } >Reset</button>
        <button onClick = { handleless } >-1</button>
        </>
    )
}


Counterapp.propTypes = {
    value: PropTypes.number
}
export default Counterapp
//rafcp para hacer un func component del tiron, la p es para propTypes
