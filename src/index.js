import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App'
import {DarkModeprovider} from './darkMode/context';

const appDivEl = document.getElementById('cfe')
const RootApp = () =>{
    return <Router>
        <DarkModeprovider>
            <App />
        </DarkModeprovider>
    </Router>
}

ReactDOM.render(<RootApp />, appDivEl)


