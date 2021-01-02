import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"
import React from 'react';
import '@testing-library/jest-dom'

describe('Pruebas en PrimeraApp', () => {
    
    test('Debe de mostrar el mensaje "holamundo"', () => {
        
        const saludo = 'holamundo';

        const wrapper = render(<PrimeraApp saludo ={saludo} />) ;//producto renderizado
    
        expect( wrapper.getByText(saludo) ).toBeInTheDocument();
        
    
    })
    
})
