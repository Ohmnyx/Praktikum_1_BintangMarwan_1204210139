
console.log("------ Arrow Function ------");

// Normal Function
function hello() { 
    return "Hello World!";
}

// Normal function (kedua normal function berikut hanya membuat fungsi bernama hello yang mengembalikan nilai "Hello World!")
hello = function() {
    return "Hello World!";
}

console.log(hello());

// Arrow Function
hello = () => { // membuat fungsi hello dengan yang mengembalikan nilai hello world
    return "Hello World! This is from Arrow Function";
}

// Arrow Function 
hello = () => "Hello World! This is from Arrow Function"; // sama dengan yang diatas tetapi lebih ringkas

console.log(hello());

// Arrow Function with 1 parameter
hello = (myName) => "Hello " + myName + "! This is from Arrow Function"; // membuat fungsi hello world tetapi dengan tambahan argumen

// Arrow Function with 1 parameter
hello = myName => `Hello ${myName}! This is from Arrow Function`;

console.log(hello("Purnama"));

