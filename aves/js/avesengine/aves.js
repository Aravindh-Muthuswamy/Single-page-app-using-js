function renderHTML(id, func){
    console.log("HTML Setting : id - " + id + " : func - " + func)
    return document.getElementById(id).innerHTML = func;
}

function renderText(id, func){
    console.log("Text Setting : id - " + id + " : func - " + func)
    return document.getElementById(id).textContent = func
}

export { renderHTML, renderText };