//evento mouseover
var title = document.querySelector("#title");
var hide = document.querySelector(".hide");

title.addEventListener("mouseover", function(){
    hide.style.display = "block";
    this.style.backgroundColor = "yellow";
});

//evento mouseout
title.addEventListener("mouseout", function(){
    this.style.backgroundColor = "white";
    hide.style.display = "none";
})




var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function(){

    var legenda = document.querySelector("#legenda");

    legenda.classList.remove("hide");


});

subtitle.addEventListener("mouseout", function(){

    var legenda = document.querySelector("#legenda")
    legenda.classList.add("hide");
});