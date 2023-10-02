console.log("------ Inheritance ------");

class Gadget {
    constructor(name) {
        this.name = name;
    }

    present() {
        return "I have an " + this.name;
    }
}

class Handphone extends Gadget { //buat class handphone yang mewarisi behaviour dari class gadget
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }

    show() { //Tampilkan isi fungsi ini termasuk merek dan modelnya
        return this.present() + ", it is " + this.model;
    }
}

let handphone = new Handphone("iphone", "14 Pro Max"); //define nama merek dan modelnya

console.log(handphone.show()); //panggil variable dan fungsi show