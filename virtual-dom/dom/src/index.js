import { createElement, render, renderDOM } from './element';
// ul.list>li.item*3
import diff from './diff';
import patch from './patch';

let virtualDOM = createElement('ul', {
    class: 'list-group'
}, [
    createElement('li',{class: 'item'},['周杰伦']),
    createElement('li',{class: 'item'},['王力宏']),
    createElement('li',{class: 'item'},['林俊杰']),
]);
let virtualDOM2 = createElement('ul', {
    class: 'list-group'
}, [
    createElement('li',{class: 'item'},['1']),
    createElement('li',{class: 'item'},['2']),
    createElement('p',{class: 'page'},[
        createElement('a',{class: 'link', href: "http://www.so.com/", target:'_blank' },['1'])
    ]),
    createElement('li',{class: 'item current'},['wkk']),
]);
// console.log(virtualDOM);
let el = render(virtualDOM);
renderDOM(el, document.getElementById('root'));