// inserir elemento no body

var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("este é um novo paragrafo");

novoParagrafo.appendChild(texto);

var body = document.querySelector("body");

body.appendChild(novoParagrafo);


// inserir em um container

//primeiro se localiza o elemento onde vai ser feito a alteração
var container = document.querySelector("#container");

//depois se cria a tag a qual vamos utilizar posteriormente
var spam = document.createElement("span");

//aqui com o append child inserimos um texto dentro do span criado anteriormente
spam.appendChild(document.createTextNode("este é o texto dentro do span"));

//e aqui colocamos o span já com o texto, dentro do documento localizado
container.appendChild(spam);

