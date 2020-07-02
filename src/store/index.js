import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import combinereducer from '../reducer';

const middlewares = [ReduxThunk];

const store = createStore(
    combinereducer,
    {},
    compose(applyMiddleware(...middlewares)),
);


export default store;