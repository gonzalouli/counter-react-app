import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
//import CounterApp from './CounterApp'
import './index.css';

const divroot = document.querySelector('#root');

ReactDOM.render(  <PrimeraApp saludo = 'holamundo' />, divroot); //renderiza, saludo a referencia
// ReactDOM.render(  <CounterApp value = {10} />, divroot); //renderiza, saludo a referencia
//con reactDOM nos permite trabajar con nuestro arbol de componentes

