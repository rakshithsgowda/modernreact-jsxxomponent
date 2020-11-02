// import the reaact and react dom libraries
import React from 'react';
import ReactDOM from "react-dom";
// create a react component
function getTime() {
    return (new Date()).toLocaleTimeString()
}
const App = () => {

    return (
        <div>Current Time
            <h1> {getTime()}</h1>
        </div>
    );
};
// take the react component and show it on screen

ReactDOM.render(<App />, document.querySelector('#root'));