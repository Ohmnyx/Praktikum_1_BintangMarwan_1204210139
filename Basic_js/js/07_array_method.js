
console.log("------ Array Method ------");

// forEach
let arr = [10, 20, 30, 40];
arr.forEach(function(val, key) {
    console.log(`Array value in index-${key} is ${val}`); //print dengan format deskripsi, key dan value nya secara satu persatu
});

// Map
let arrSquare = arr.map((val) => val * val); //dengan function map array akan tetap di print menjadi satu array dengan satu fitur tambahan val dikali dengan val
console.log(arrSquare);

