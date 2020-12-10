import { home } from './home.js'
import { about } from './about.js'
import { pageSwitch } from '../avesengine/aves.js'

function index(){
   
    const red = `
        <button class="btn-black" onclick="${pageSwitch(home(), 'content')}" id="test-btn">Home</button>
        <button class="btn-black" onclick="${pageSwitch(about(), 'content')}" id="test-btn">About</button>
        <div id="content">${home()}</div>
    `
    return red;
    
}

export { index };