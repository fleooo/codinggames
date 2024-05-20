var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position


// game loop
while (true) {
    const remainingTurns = parseInt(readline());
   let pathX = ""
   let pathY = ""
    if(initialTy > lightY){
        pathY ="N"
    }else if(initialTy < lightY){
        pathY ="S"
        initialTy = initialTy+1 
    }
    if(initialTx > lightX){
        pathX ="W"
    }else if(initialTx < lightX){
        pathX ="E"
        initialTx = initialTx+1 
    }

    console.log(pathY+pathX);
}