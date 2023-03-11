const romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
const romanosSa = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
};

let romanToInt = function(s) {
    let soma = [];
    let formato = s
    let parametros = s.split("");

    for (i = 0; i < parametros.length; i++){
        soma.push(romanos[parametros[i]]);
        console.log(i)
    } 


    console.log(soma)
    console.log(parametros)

}
        
romanToInt("IVVV");