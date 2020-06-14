import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Switch } from "react-router-dom";
import { Provider } from'react-redux';
import store, { history } from './store';
import RouteWrapper from './router/RouteWrapper'
import Pages from './router/Pages/Pages'
import {routes} from './router/routes'
import {enumToArray} from './helpers'
import { ConnectedRouter } from 'connected-react-router';

const paths = enumToArray(routes)

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
        <RouteWrapper exact path={paths} >
            <Pages />
        </RouteWrapper>
    </ConnectedRouter>
    </Provider>,
    document.getElementById("app")
);