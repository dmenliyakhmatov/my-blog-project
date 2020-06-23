import * as constants from '../../constants';
import axios from 'axios';

export default {
    saveUserInputValue(value:any) {
        console.log('in action creator saveUserInputValue', value);
        return {
            type: constants.USER_INPUT_LOGIN_CHANGED,
            payload: value,
        };
    },
    onLogin() {
        return {
            type: constants.USER_TRY_TO_LOG_IN,
        };
    },
    onLogout() {
        return {
            type: constants.USER_TRY_TO_LOG_OUT,
        };
    },
    fetchUser() {
        return async (dispatch: any, getStore: any) => {
            const {user} = getStore();
            dispatch({
                type: constants.GET_USERS_LOADING,
            });
            try {
                const response = await axios({
                    method: 'GET',
                    url: `http://localhost:5000/api/info/${'96f0474a-be0e-4a90-b341-94b484be2d56'}`,
                    headers: {token: user.token},
                });
                dispatch({
                    type: constants.GET_USERS_SUCCESS,
                    payload: response.data
                })
            } catch (e) {
                dispatch({
                    type: constants.GET_USERS_FAIL,
                    payload: e.message,
                });
            }
        };
    },
    fetchNextPosts(postNumber: number) {
        return async (dispatch: any, getStore: any) => {
            const store = getStore();
            // dispatch({
            //     type: constants.GET_USERS_LOADING,
            // });
            try {
                const response = await axios({
                    method: 'GET',
                    url:`http://localhost:5000/api/info/${'96f0474a-be0e-4a90-b341-94b484be2d56'}/nextPosts`,
                    headers: {postNumber:postNumber}
                });
                
                console.log(response)
                dispatch({
                    type: constants.GET_USER_POST_SUCCESS,
                    payload: response.data
                })
            } catch (e) {
                dispatch({
                    type: constants.GET_USERS_FAIL,
                    payload: e.message,
                });
            }
        };
    },

}