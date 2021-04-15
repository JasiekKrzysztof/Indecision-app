class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.hanleDeleteSingle = this.hanleDeleteSingle.bind(this);
        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options){
                this.setState( () => ({ options: options }))
            }
        } catch (e) {
            //Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentDidWillUnmount() {
        console.log('componentDidWillUnmount');
    }

    handleDeleteOptions(){
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
        this.setState(() => ({ options: [] }))   // to samo co wyzej (skrócona fornma zapisu)
    }

    hanleDeleteSingle(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) =>  ({
            options: prevState.options.concat(option)
        }));
    }

    render(){
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle = {subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions} 
                    hanleDeleteSingle = {this.hanleDeleteSingle}
                    />
                <AddOption 
                    handeAddOption = {this.handleAddOption}
                    />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
};

// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return(
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What should I do?</button>
        </div>
    )
}

// class Action extends React.Component {
//     render(){
//         return(
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}>
//                     What should I do?</button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Plese add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        hanleDeleteSingle={props.hanleDeleteSingle}
                    />
                ))
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.hanleDeleteSingle(props.optionText);
            }}>
                Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor (props) {
        super(props);
        this.handeAddOption = this.handeAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handeAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handeAddOption(option);

        this.setState(() => ({ error }));

        if (!error){
            e.target.elements.option.value = '';
        }
    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handeAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// const User = (props) => {
//     return (
//         <div>
//            <p>Name: {props.name} </p>
//            <p>Age: {props.age}</p> 
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp options={['Option 1', 'Option 2']}/>, document.getElementById('app'));