//selecionar o H1

var title = document.querySelector("#title");

title.setAttribute("class", "testando-atributo");

console.log(title);

var btn = document.querySelector("#btn");

btn.setAttribute("disabled", "disabled")


var subtitle = document.querySelector(".subtitle");

subtitle.setAttribute("id", "id-subtitulo");


//remover atributo


subtitle.removeAttribute("id")