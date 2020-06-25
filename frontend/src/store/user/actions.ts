import { REGISTRATION_FAIL } from './../../constants/index';
import * as constants from '../../constants';
import axios from 'axios';
import { ILoginForm } from '../../interfaces';

export default {
    modalActivate(nextModalState: boolean) {
        console.log(nextModalState)
        return {
            type: constants.SET_MODAL_STATE,
            payload: nextModalState,
        }
    },
    onLogin(formData: ILoginForm) {
        return async (dispatch: any) => {
            dispatch({
                type: constants.LOGIN_WAITING
            });
            try {
                const response = await axios ({
                    method: 'POST',
                    url: `http://localhost:5000/api/login`,
                    data: formData,
                });
                console.log(response.data)
                dispatch({
                    type: constants.LOGIN_SUCCESS,
                    payload: response.data,
                })
            } catch (e) {
                dispatch({
                    type: constants.LOGIN_FAIL,
                    payload: e.message,
                });
            }
        }
    },
    registration(formData: ILoginForm) {
        return async (dispatch: any) => {
            dispatch({
                type: constants.USER_TRY_TO_REGISTRATE
            });
            try {
                const response = await axios ({
                    method: 'POST',
                    url: `http://localhost:5000/api/register`,
                    data: formData,
                });
                dispatch({
                    type: constants.REGISTRATION_SUCCESS,
                    payload: response.data,
                })
            } catch (e) {console.log('!!!!!')
                dispatch({
                    type: constants.REGISTRATION_FAIL,
                    payload: e.message,
                });
            }
        }
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