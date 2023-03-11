let numeros = [12, 15]
let resultado = []
for(i = 0; i < numeros.length; i++){
    resultado.push([]);
    for(p = 2; p < numeros[i]; p++){
        if(numeros[i] % p == 0){
            resultado[i].push(p)
        }
    }
}


console.log()  
