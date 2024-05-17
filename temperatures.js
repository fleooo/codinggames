const n = parseInt(readline()); // the number of temperatures 

let tTempNeg = -273;
let tTempPos = 5526;
let result = 0;


var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
    
    const t = parseInt(inputs[i]);
    
    if((t < tTempPos) && t > 0){
        tTempPos = t;
    }

    if((t > tTempNeg) && t < 0){
        tTempNeg = t;
    }

    if (tTempPos <= tTempNeg * -1){
        result = tTempPos;
    }else{
        result = tTempNeg;
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(result);