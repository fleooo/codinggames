
const N = parseInt(readline());
var chevaux=[]; 
for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    chevaux.push(pi);
}
chevaux = chevaux.sort((a, b) => a - b);
var differences = chevaux
.map((current, index, array) => current - array[index-1])
.slice(1)
.sort((a, b) => a - b)
                    

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(differences[0]);
