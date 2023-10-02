console.log("------ Variables ------ (can be redeclared)");

// Var (nilai "i" is 0, selama "i" kurang dari lima tambahkan nilai "i")
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

console.log("------ Variables with loop ------");

function looping() { // the same thing, cuman pakai loop
  for (var j = 0; j < 5; j++) {
    console.log(j); // Loop dulu
  }
  console.log(j); // then put in on console
}
looping();


console.log("------ Variables using let (cannot be redeclared and must be declared before use)------");
let k = 0;

for (let k = 0; k < 5; k++) {
    console.log(k);
}

console.log(k);

// Let
for (let l = 0; l < 5; l++) {
  console.log(l);
}
if (true) {
  let l = 100;
  console.log("l =",l);
}

console.log("------ Const (cannot be redeclared and reassigned)------");
// Const
const phi = 3.14;
// phi = 3.147;
console.log(phi);