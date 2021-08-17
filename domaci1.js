var br_ucenika = 20
var n = 3
var pom = 1

console.log("Unesite broj ucenika: " + br_ucenika);
console.log("Unesite prirodan broj: " + n);

// Prvi nacin

for(let i=1; i<=br_ucenika; i+=n){
    console.log("Ispitivati ce se ucenici s rednim brojevima: "+ i);
}

// Drugi nacin

/* for(let i=1; i<=br_ucenika ; i++){
    if(i === 1){
        console.log("Ispitivati ce se ucenici s rednim brojevima: "+ i);
    }
    else if(pom > br_ucenika-n){
        break
    }
    else{
        pom+=n
        console.log("Ispitivati ce se ucenici s rednim brojevima: "+ pom);
    }
} */
//  console.log("Ispitivati ce se ucenici s rednim brojevima: "+ pom);
