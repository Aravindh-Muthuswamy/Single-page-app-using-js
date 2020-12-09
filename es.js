import { sayHello, dom } from './test.js';
import { sayHellox } from './sayhelloworld.js';

const first = document.getElementById('one');
const second = document.getElementById('two');
first.addEventListener('click', function(){
    document.getElementById('testx').innerHTML = sayHello()
})
second.addEventListener('click', function(){
    document.getElementById('testx').innerHTML = sayHellox()
})