
// Hello
let myElement = "Hello World";


// Basic Rules
myElement = "<h3>Hello React</h3>"; // wrong
myElement = <h3>Hello React</h3>; // correct, karena di js tidak perlu menggunakan quotation untuk mendefinisikan string


// Basic Rules
// myElement = <img src="https://placehold.co/600x400" >; // wrong
myElement = <img src="https://placehold.co/600x400" />; // correct, Harus menggunakan garing untuk mereferensikan link sebelum ditutup


// Basic Rules
// myElement = (
//     <p>Learn Javascript</p>
//     <p>Learn React</p>
// ); // wrong
myElement = ( //untuk membuat variable yang memiliki beberapa atribut harus menggunakan div
    <div>
        <p>Learn Javascript</p>
        <p>Learn React</p>
    </div>
); // correct


// Statement in JSX
let myText = "Learn React";
myElement = (
    <div>
        <h3>{myText}</h3>
    </div>
);


// Array Processing
let items = ["Table", "Handphone", "Computer"];
myElement = (
    <ul>
        {items.map((item, index) => <li>{item}</li>)}
    </ul>
);

const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);

