'use strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import reducers from './reducers/index';
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';

// STEP 1 Create a store use middleware to listen for changes
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/bookList';

render(
    <Provider store={store}>
        <BooksList/>
    </Provider>, document.getElementById('app')
);

// STEP 2 dispatch actions 
store.dispatch(postBooks(
    [{
        id : 1,
        title: 'this is the book title',
        description: 'this is the book description',
        price : 33.33
    },{
        id : 2,
        title: 'this is the second book title',
        description: 'this is the second book description',
        price : 50
    }]
))

store.dispatch(deleteBooks(
    { id : 1 }
))

store.dispatch(updateBooks(
    { 
        id : 2,
        title: 'Learn React in 24hrs' 
    }
))

store.dispatch(addToCart([{ id: 1 }]));