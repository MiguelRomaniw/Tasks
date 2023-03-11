function longest(s1, s2) {
    let juntar = s1 + s2;
    juntar = juntar.split("").sort().join("")
    let formato = ""
    for(i = 0; i < juntar.length; i++){
        if(formato.indexOf(juntar[i]) == -1){
            formato += juntar[i]
        };
    }
    return formato
  }

 console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))
/*for(i = 0; i < a.length; i++){

    if(c.indexOf(a[i]) == -1){
        c += a[i]
    } else{

    }
}*/
