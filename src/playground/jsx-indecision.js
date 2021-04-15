console.log('App.js is running!');

// JSX - JavaScript XML
const appRoot = document.getElementById('app');

const app = {
    tilte: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();

         // if(!app.options.find((element) => {
        //   return element === option
        // })) {
        //     app.options.push(option);
        // }
        // e.target.elements.option.value = '';
        // renderApp();
    }
}



const onRemoveAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNum]);
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.tilte}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();


