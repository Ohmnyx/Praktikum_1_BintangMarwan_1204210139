
// Functional Component
const ReactTitle = () => { //Simple compoenent untuk return elemen JSX
    return <h3>Currently learning ReactJS</h3>
}
const JavascriptTitle = () => {
    return <h3>Currently learning Javascript</h3>
}
const MyComponent = () => {
    return (
        <div>
            <ReactTitle />
            <hr />
            <JavascriptTitle/>
        </div>
    );
}
let myElement = <MyComponent /> //untuk return value MyComponent


// Props in Functional Component
const Practice = (props) => <h3>Practice: {props.course}</h3>; //componen fungsional meggunakan 1 parameter
myElement = ( //instance dengan beberapa string yang berbeda disatukan dengan div
    <div>
        <Practice course="Javascript"/>
        <Practice course="ReactJS"/>
        <Practice course="React Native"/>
    </div>
);

const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);

