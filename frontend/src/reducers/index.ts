import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './user';

export default function createRootReducer(history:any) {
    return combineReducers({
        router: connectRouter(history),
        user: userReducer,
    });
}
