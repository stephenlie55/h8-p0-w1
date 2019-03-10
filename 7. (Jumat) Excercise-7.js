console.log("Excercise 7, nomor 1");

var r = 5;

while(r>=1){
    console.log("*");
    r-=1;
}


console.log("Excercise 7, nomor 2");

for (var t=5; t>=1; t--){
    var h = "";
    for(a=5; a>=1; a--){
        h = h + "*";    
    }
    console.log(h);
}


console.log("Excercise 7, nomor 3");
var z = ""
for (var d=1; d<=5; d++){
        for(a=1; a<=d; a++){
            z = z + "*";    
        }
    console.log(z);
    z ="";   
}