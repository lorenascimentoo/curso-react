import React from 'react';
import ReactDOM from 'react-dom';
import { CompA, CompB } from './componentes/DoisComponentes'
const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
        <CompA valor="Olá eu sou o A"/>
        <CompB valor="B na área"/>
    </div>
    //<div><PrimeiroComponente valor="Testando props"/></div>
    , elemento);