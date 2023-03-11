let number = [[10, 0, 13],[3, 5, 3],[5, 8, 10]]

let teste = number.reduce((acumulador, [primeiro, segundo, terceiro], index) => {
    console.log(primeiro, segundo, terceiro)   
    console.log(index) 
    acumulador += primeiro - segundo

    return acumulador
}, 0);
console.log(teste) 