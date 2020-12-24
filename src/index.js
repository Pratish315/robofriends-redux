import React from 'react';
import thunkMiddleware from 'redux-thunk';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {searchRobots, requestRobots} from './reducers';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import {createLogger} from 'redux-logger';


const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
