
console.log("------ Spread Operator ------");

// Array
let arr1 = [10, 20, 30];
let arr2 = [100, 200, 300];

// Without Spread Operator, Langsung memasukan arr1 dan 2 ke dalam arr3 maka hasilnya akan mengashilkan 2 array yang terpisah
let arr3 = [arr1, arr2];
console.log(arr3);

// With Spread Operator, hasilnya akan menjadi satu array secara berurutan dimulai dari arr1
let arr4 = [...arr1,...arr2];
console.log(arr4);

// With Spread Operator, hasilnya satu array dengan index arr1 ditambah 40 dan 50
let arr5 = [...arr1, 40, 50];
console.log(arr5);

// With Spread Operator, hasilnya arr1 ditambah 30,40,50 dengan urutan nilai baru terlebih dahulu
let arr6 = [30, 40, 50, ...arr1];
console.log(arr6);

// Object
let employee = {
    name: "Budi",
    age: 22,
    position: "Software Engineer"
};

// Without Spread Operator
let employee1 = {
    employee,
    age: 25,
    city: "Jakarta"
};
console.log(employee1);

// With Spread Operator
let employee2 = {
    ...employee,
    age: 20,
    city: "Surabaya"
};
console.log(employee2);

