const dom = 'hello';

function sayHello(){
    function ele(){
        const elem = "document.getElementById('content').innerHTML = 'clicked'"
        return elem
    }
    const doing="compnew.html"
    const red = `
        <a href="#" onclick="${ele()}" id="test-btn">Click here</a>
        <div id="content"></div>
    `
    return red;
    
}

// btn.addEventListener("click", function(){ btn.style.backgroundColor="blue"})

export { sayHello, dom };