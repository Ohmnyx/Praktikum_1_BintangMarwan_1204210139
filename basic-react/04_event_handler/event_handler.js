// Button Component
const MyButton = (props) => { //Functional comp dengan argumen props
    const handleButtonClick = () => { //display alert sesuai argumen props
        alert(props.message);
    }

    return (
        <button onClick={handleButtonClick} style={{ margin: "10px" }}>
            {props.children}
        </button>
    );
}


// App Component
const MyApp = () => { //main app
    return ( //title, dan button
        <div>
            <h1>Learn React</h1>
            <MyButton message="Learn React">React</MyButton>
            <MyButton message="Learn JavaScript">JavaScript</MyButton>
        </div>
    );
}

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);

