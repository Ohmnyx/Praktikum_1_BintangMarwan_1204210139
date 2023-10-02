console.log("------ Class ------");

class Car { //membuat blueprint untuk class 'car'
    constructor(name) { //Consturctor berfungsi untuk mengatur mereknya dari variable "name"
        this.brand = name;
    }

    present() { //Fungsi untuk memanggil class car itu sendiri
        return "I have a " + this.brand; //kemudian print "i have a" dengan variable brand
    }
}

let myCar = new Car("Ford"); //membuat objek baru dengan nama "ford"

console.log(myCar.present()); //print variable myCar dengan fungsi present