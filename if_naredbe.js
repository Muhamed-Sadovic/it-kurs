let ocena =-213

if(ocena > 0 && ocena <= 50){
    console.log("Nedovoljan")
}
else if(ocena > 50 && ocena <= 63){
    console.log("Dovoljan")
}
else if(ocena > 63 && ocena <= 76){
    console.log("Dobar")
}
else if(ocena > 76 && ocena <= 89){
    console.log("Vrlo dobar")
}
else if(ocena > 89 && ocena <= 100){
    console.log("Odlican")
}
else{
    console.log("Ocena je nevazeca")
}