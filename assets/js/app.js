import '../css/app.css';
import React from 'react';
import ReactDOM from 'react-dom';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log('Hello, World!');

class App extends React.Component {
    render() {
        return(
            <h1>Hello. World!</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
