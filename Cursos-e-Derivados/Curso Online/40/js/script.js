// criar elemento

var el = document.createElement("div");

el.classList = "div-criada";


var container = document.querySelector("#container");


//inserindo elemento filho
container.appendChild(el);


var el2 = document.createElement("div");

el2.classList = "div-before";

var div = document.querySelector(".div-criada");
console.log(div)

container.insertBefore(el2, div);