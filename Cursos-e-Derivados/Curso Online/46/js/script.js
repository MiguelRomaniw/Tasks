//clear time out na pratica
var x = 0
var miTimer = setTimeout(function(){
    console.log("o x é 0")
}, 1500);

x = 5;

if (x > 0){
    clearTimeout(miTimer)
    console.log("o x passou de 0")
};


//clearInterval na pratica

var miInterval = setInterval(function(){
    console.log("imprimindo intervalo");
}, 1500);


setTimeout(() => {
    console.log("não precisamos mais de intervals")
    clearInterval(miInterval)
}, 2500);


setTimeout(function() {
    console.log("não precisamos mais de intervals")
    clearInterval(miInterval)
}, 2500);