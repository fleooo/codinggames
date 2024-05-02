while (true) {
    let mountainLPH =0
    let indiceLPH= 0
    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline());
        if(mountainLPH<mountainH){
            indiceLPH = i;
            mountainLPH = mountainH;
        }

    }
console.log(indiceLPH);
        
}
