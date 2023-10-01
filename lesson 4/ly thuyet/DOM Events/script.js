/**
 * DOM Events
 * 1. Attribute events
 * 2. Assign event using the element node
 * 
 */
function buttonClick(url){
    window.location = url;
}

var h2Element = document.querySelector('h2');
    h2Element.onclick = function(e){
        console.log(e.taget);
    }
