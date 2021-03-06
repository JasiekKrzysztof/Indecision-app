class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)){
            this.setState( () => ({ count: count }))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne(){
        this.setState((prevState) => ({ count: prevState.count +1 }))
    }

    handleMinusOne(){
        this.setState((prevState) => ({ count: prevState.count -1 }))
    }

    handleReset(){
        this.setState(() => ({ count: 0 }))
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));



// const addOne = () => {
//     count = count + 1;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count = count - 1;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// let count = 0;

// const appRoot = document.getElementById('app')

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick = {addOne}> +1</button>
//             <button onClick = {minusOne}> -1</button>
//             <button onClick = {reset}> Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp();