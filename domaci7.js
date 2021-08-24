function maskify(cc){
    let cetiribroja = cc.slice(-4)
    let taraba = ""
    for(let i=0;i<cc.length-4;i++){
        taraba += "#"
    } 
    return taraba + cetiribroja
  }

  console.log(maskify("123456789"));