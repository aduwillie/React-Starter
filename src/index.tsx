import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HelloWorld } from './component';

let person: string = 'Eugene';
let people: string[] = [
    'Richard',
    'Eugene',
    'Willie'
]

ReactDom.render(
    <HelloWorld name={person} people={people} />,
    document.getElementById('main')
);