import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import appRouter from "./App";
import { Provider } from 'unistore/react';
import { store } from './Store';


// import Home from './pages/Home';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';
// import News from './pages/News';

import AppRouter from './AppRouter';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Home />, document.getElementById('root'));
// ReactDOM.render(<Gallery />, document.getElementById('root'));
// ReactDOM.render(<Contact />, document.getElementById('root'));
// ReactDOM.render(<News />, document.getElementById('root'));

const rootEl = document.getElementById('root');
const render = Component => 
    ReactDOM.render (
        <Provider store={store}>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </Provider>,
        rootEl
    );

render(AppRouter);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
