/* 
Como Funciona

O import funciona na seguinte maneira: import método from 'biblioteca';
no exemplo abaixo ele ta carregando tudo e atribuindo a instancia. */ 
import * as Ramda from 'ramda';

/*
    Importando apenas os metodos que irão ser utilizados:
*/ 
import { union, uniq } from 'ramda';

/*
    Renomeando um método ao importa-lo:
*/ 
import { union as juntaTudo } from 'ramda';

/*
    Importantdo um proprio modulo:
*/ 
    import soma, { sub, div as dividir, multiplicar } from './utils';

/*
    React && React DOM
*/ 
    import React from 'react'
    import ReactDom from 'react-dom'

let xs = [1, 1, 2, 2, 3, 3, 4, 4];
let ys = [5, 5, 6, 6, 7, 7, 8, 8];

let ws = Ramda.union(xs, ys);
let as = uniq(xs);
let bs = juntaTudo(xs, ys); 

console.log(bs);
console.log(as);
console.log(ws);
console.log( soma(2, 2) );
console.log( sub(5, 2) );
console.log( multiplicar(2, 2) );
console.log( dividir(1, 5) );
