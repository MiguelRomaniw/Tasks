//criar elemento

var el = document.createElement("h3");

el.classList = "testando-classe";

var texto = document.createTextNode("texto criado");

el.appendChild(texto);

console.log(el)


//selecionar o elemento para subsituir

var title = document.querySelector("#title");


//seleciona o elemento pai
var pai = title.parentNode;


//trocar os elementos
pai.replaceChild(el, title);