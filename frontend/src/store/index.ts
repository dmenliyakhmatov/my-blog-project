import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './commonReducer';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory();

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunk,
        ),
    ),
);

export default store;
