function countSmileys(arr) {
    let brojac = 0
    for(let i=0;i<arr.length;i++){
          if(arr[i] === ":)" || arr[i] === ";)" || arr[i] === ":D" || arr[i] === ";D" ||
          arr[i] === ":-)" || arr[i] === ";-)" || arr[i] === ":~)" || arr[i] === ";~)" ||
          arr[i] === ":-D" || arr[i] === ";-D" || arr[i] === ":~D" || arr[i] === ";~D"){
          brojac++
          }
      }
      return brojac
    }
    console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));