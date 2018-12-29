import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {geolocation} from "./utils/geolocation";

(async () => {
    if(navigator.geolocation) {
        console.log('on peut localiser');
        const location = await geolocation();
        console.log(location);
    } else {
        // Pas de support, proposer une alternative ?
    }
})();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
