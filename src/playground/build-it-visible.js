// const appRoot = document.getElementById('app');

// const app = {
//     tilte: 'Visibility Toggle',
//     buttonOption: ['Show details', 'Hide details']
// };
// let buttonName = app.buttonOption[0];
// let details = '';
// const onClickButton = () => {
//    if(buttonName === app.buttonOption[0]){
//         buttonName = app.buttonOption[1];
//         details = 'Hey.These are some details you can now see!';
//    }else{
//         buttonName = app.buttonOption[0];
//         details = '';
//    }
//     renderApp();
// }

// renderApp() {
//     return (
//         <div>
//             <h1>{app.tilte}</h1>
//             <button onClick={onClickButton}>{buttonName}</button>
//             <p>{details}</p>
//         </div>
//         )
//         ReactDOM.render(myApp, appRoot);
//     }
// }
// renderApp();

class Visible extends React.Component{
    constructor(props){
        super(props)
        this.visiblity = this.visiblity.bind(this);
        this.state = {
            visi: false
        }
    }

    visiblity(){
        this.setState((prevState) => {
            return {
                visi: !prevState.visi
            }
        })
    }
    
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.visiblity}>{this.state.visi ? 'Hide details' : 'Show details'}</button>
                {this.state.visi && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<Visible />, document.getElementById('app'));