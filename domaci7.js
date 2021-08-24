function maskify(cc){
    let taraba = ""
    let cetiribroja = cc.slice(-4)
    for(let i=0;i<cc.length-4;i++){
        taraba += "#"
    } 
    return taraba + cetiribroja
  }

  console.log(maskify("123456789"));