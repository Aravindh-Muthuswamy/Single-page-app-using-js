const dom = 'hello';

function sayHello(){
    function ele(){
        function mes(){
            const mess = 'clicked'
            return `document.getElementById('content').innerHTML = '${mess}'`
        }
        const elem = mes()
        return elem
    }
    const red = `
        <h1>symbolic things to represent</h1>
        <a href="#" onclick="${ele()}" id="test-btn">Click here</a>
        <div id="content"></div>
    `
    return red;
    
}

// btn.addEventListener("click", function(){ btn.style.backgroundColor="blue"})

export { sayHello, dom };