function createPhoneNumber(numbers){
    let nuns =[];
    for(i = 0; i < 10; i++){
        if(i == 0){
            nuns.push("(")
        }
        if(i == 3){
            nuns.push(")")  
        }
    
        if(i == 6){
            nuns.push("-")
        }
        let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const randomElement = num[Math.floor(Math.random() * num.length)];
        nuns.push(randomElement);
    };

    let numer = nuns.toString();
    numer = numer.replace(/,/g, "").replace(/ /g, "");
    var numbers = numer
    return(numbers);
}


console.log(createPhoneNumber());