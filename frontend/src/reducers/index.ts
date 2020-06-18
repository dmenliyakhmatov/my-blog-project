import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './user';
import postReduser from './post'
import { reducer as formReduser } from 'redux-form';

export default function createRootReducer(history:any) {
    return combineReducers({
        router: connectRouter(history),
        user: userReducer,
        post: postReduser,
        form: formReduser,
    });
}
