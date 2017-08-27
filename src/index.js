import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import counter from './counter.js';

/*
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

const Counter = ({value, onIncrement, onDecriment}) => {
    
    return <div>
            <h1>{value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecriment}>-</button>
        </div>
    
};

const store = createStore(counter);

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement=
            {() => store.dispatch({type: "INCREMENT"})}
            onDecriment=
            {() => store.dispatch({type: "DECREMENT"})}/>,
        document.getElementById('root'));
};

store
.subscribe(render);
render(); 
//document.addEventListener('click', () => {    store.dispatch({type:
// "INCREMENT"}); });