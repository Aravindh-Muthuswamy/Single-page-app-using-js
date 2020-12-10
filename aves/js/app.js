import { home } from './components/home.js'
import { about } from './components/about.js'
import { renderHTML, renderText } from './avesengine/aves.js'

const first = document.getElementById('one');
const second = document.getElementById('two');



first.addEventListener('click', function(){
    // renderHTML('app', home())
    renderText('app', home())
})
second.addEventListener('click', function(){
    renderHTML('app', about())
    // renderText('app', about())
})