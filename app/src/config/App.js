/*
 * @file: App.js
 * @description: Loaded data after rehydrated true
 * @date: 10.6.2018
 * @author: Monika Rani
 * */

import React, {Component} from 'react';  
import { persistStore } from "redux-persist";
import Routers from './Routers'; 
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from './configureStore';
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();
/************ store configration *********/
const store = configureStore();

class App extends Component {  

  constructor() {
    super()
    this.state = { }
  }
  render() {
    return (
      <Provider store={store}> 
  	    <Router history={history}>  
  	      <Routers store={store} />
  	    </Router>
	   </Provider>
    );
  }

}


export default App;
