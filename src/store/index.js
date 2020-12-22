import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import products from './reducers/productsReducers';
import carrinho from './reducers/carrinhoReducers';

const reducers = combineReducers({products, carrinho});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
