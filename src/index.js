import React from 'react';
import ReactDOM from 'react-dom';
//import { CompA, CompB } from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos'
const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
        <MultiElementos/>
    </div>
    /*<div>
        <CompA valor="Olá eu sou o A"/>
        <CompB valor="B na área"/>
    </div>*/
    //<div><PrimeiroComponente valor="Testando props"/></div>
    , elemento);