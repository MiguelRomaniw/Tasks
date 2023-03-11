function openOrSenior(data){
    let candidato = data
    let result = []
    for(i = 0; i < candidato.length; i++){
        if(candidato[i][0] >= 55 && candidato[i][1] > 7){
            result.push("Senior")
        } else {
            result.push("Open")
        }
    }
    return result
  }
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))