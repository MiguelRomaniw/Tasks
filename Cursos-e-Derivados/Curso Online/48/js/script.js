//inserir clcick
var btn = document.querySelectorAll("#btn");
console.log(btn[1]);

btn[this].addEventListener("click", function(){

    console.log("clicou");

    console.log(typeof this);

    this.style.color = "red";

});

//click afetando outros elementos
var title = document.querySelector("#title");

title.addEventListener("click", function(){

   var subtitle = document.querySelector(".subtitle");

   subtitle.style.display = "none";
});


//doble click
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function(){

    console.log("clique duplo!");
});

