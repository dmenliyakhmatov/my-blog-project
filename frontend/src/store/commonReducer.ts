import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './user/reducer';
import postReduser from './post/reducer'
import { reducer as formReduser } from 'redux-form';

export default function createRootReducer(history:any) {
    return combineReducers({
        router: connectRouter(history),
        user: userReducer,
        post: postReduser,
        form: formReduser,
    });
}
