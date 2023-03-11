function lac() {
    let reslac = document.getElementById('lactante');
    let sexo = parseFloat(document.querySelector('input[name="sexo"]:checked').value);
    if (sexo == 1){
        reslac.style.display = 'block'
    } else {
        reslac.style.display = 'none'
    }
}
function id (teste) {
    return parseFloat(document.querySelector(`${teste}`).value);
}

function calcular() {

    let altura = id('#altura');
    let idade = id('#idade');
    let peso = id('#peso');
    let af = id('input[name="af"]:checked');
    let calc = 662 - (9.53 * idade) + (af * (15.91 * peso + 539.6 * altura));
    let sexo = id('input[name="sexo"]:checked');
    let res = document.getElementById('res');

    if (sexo == 0) {
        let calc = 662 - (9.53 * idade) + (af * (15.91 * peso + 539.6 * altura));
        res.innerHTML = `${calc}`
    } else if (document.getElementById('lacsim').checked) {
        if (af == 1.11) {
            af = 1.12
        } else if (af == 1.25) {
            af = 1.27
        } else if (af == 1.48) {
            af = 1.45
        } else {
            af = 1
        }
        let calc = 354 - (6.91 * idade) + (af * (9.36 * peso + 726 * altura))+675;
        res.innerHTML = `${calc}`
    } else if (document.getElementById('lacnao').checked) {
        if (af == 1.11) {
            af = 1.12
        } else if (af == 1.25) {
            af = 1.27
        } else if (af == 1.48) {
            af = 1.45
        } else {
            af = 1
        }
        let calc = 354 - (6.91 * idade) + (af * (9.36 * peso + 726 * altura));
        res.innerHTML = `${calc}`;
    } else {
     }
}
    
