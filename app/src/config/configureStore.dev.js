/*
 * @file: configureStore.js
 * @description: Configure/creating redux store with thunk,reducer etc
 * @date: 10.06.2018
 * @author: Monika Rani
 * */



import { compose, applyMiddleware, createStore } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import reducer from '../redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';




const logger = store => next => action => {
    return next(action);
};


export const history = createHistory()
const initialState = {}

export default function configureStore() { 

    const store = createStore(
       reducer,
        compose(
            autoRehydrate(),
            devToolsEnhancer({ 
                hostname: "localhost",
                port: 3000
            })
        ),
        applyMiddleware(logger, thunk,routerMiddleware(history)),
        initialState

    );

    persistStore(
        store,
        () => {   
            let storeData = store.getState();
            console.log('storeData',storeData);
        }
    );
    store.history = history;     
   
    return store;
}
