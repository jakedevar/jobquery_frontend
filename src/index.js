import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { dataReducer } from './reducers/dataReducer';
import {applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import axios from 'axios';

async function fetchData(dispatch, getState) {
	const response = await axios.get('/api/jobData').then(res =>{
		return res.data.map(data => data)
	}) 
	await console.log(response)
	dispatch({type: 'data', payload: response})
}

(async function() {

	const asyncStuff = applyMiddleware(thunkMiddleware)
	const store = createStore(dataReducer, asyncStuff)

	await store.dispatch(fetchData)

	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<Provider store={store}>
		<App />
		</Provider>
	);
})()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
