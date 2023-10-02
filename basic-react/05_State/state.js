
// Cat Component
class Cat extends React.Component { // buat class cat dengan state default nya ishungry = true
    // State Declaration
    state = { 
        isHungry: true 
    };

    render() {
        return (
            <div>
                <p>I am {this.props.name}, and I am {this.state.isHungry ? " hungry" : " full"}!</p>
                <button
                    onClick={() => { //ketika button di klik akan merubah state class nya menjadi false
                        this.setState({ isHungry: false });
                    }}
                    disabled={!this.state.isHungry} // lalu membuat button nya inactive
                >
                    {this.state.isHungry ? "Pour me some milk, please!" : "Thank you!"} 
                </button>
            </div>
        );
    }
};


// Cafe Component
class Cafe extends React.Component { //Cafe adalah representasi rumah untuk class cat untuk di render
    render() {
        return (
        <div>
            <Cat name="Munkustrap" />
            <Cat name="Spot" />
        </div>
        );
    }
};

const myElement = <Cafe />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);

