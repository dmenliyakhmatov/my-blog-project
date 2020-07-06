import { API_PATH } from './../../constants/apiPath';
import { REGISTRATION_FAIL, LEAVE_USER_PAGE, DELETE_USER, GET_DATA_FROM_STORAGE, GET_USERS_FAIL } from './../../constants/index';
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
                    url: `${API_PATH}/login`,
                    data: formData,
                });
                console.log(response.data)
                dispatch({
                    type: constants.LOGIN_SUCCESS,
                    payload: response.data,
                })
            } catch (e) {console.log(e)
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
                    url: `${API_PATH}/register`,
                    data: formData,
                });
                dispatch({
                    type: constants.REGISTRATION_SUCCESS,
                    payload: response.data,
                })
            } catch (e) {console.log(e.err)
                
                dispatch({
                    type: constants.LOGIN_FAIL,
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
    fetchUser(userId: string) {
        console.log(userId)
        return async (dispatch: any, getStore: any) => {
            const {user} = getStore();
            dispatch({
                type: constants.GET_USERS_LOADING,
            });
            try {
                const response = await axios({
                    method: 'GET',
                    url: `${API_PATH}/info/${userId}`,
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
    fetchNextPosts(postNumber: number, userId: string) {
        return async (dispatch: any, getStore: any) => {
            const store = getStore();
            // dispatch({
            //     type: constants.GET_USERS_LOADING,
            // });
            try {
                const response = await axios({
                    method: 'GET',
                    url:`${API_PATH}/info/${userId}/nextPosts`,
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
    getDataFromStorage(currentUser: any, token: string) {
        return {
            type: GET_DATA_FROM_STORAGE,
            payload: { currentUser, token },
        }
    },
    resetPostCounter() {
        return {
            type: LEAVE_USER_PAGE,
        }
    },
    getEditData(userId: string) {
        return async (dispatch: any, getStore: any) => {
            const { user } = getStore();
            try {
                const response = await axios({
                    method: 'GET',
                    url:`${API_PATH}/user/${userId}/edit`,
                    headers: {Authorization: `Bearer ${user.token}` }
                });
                console.log(response.data)
                dispatch({
                    type: constants.GET_EDIT_USERDATA,
                    payload: response.data
                })
            } catch (e) {
                dispatch({
                    type: constants.GET_USERS_FAIL,
                    payload: e.message,
                });
            }
        }
    },

    sendEditData( formData: any, userId: string ) {
        return async (dispatch: any, getStore: any) => {
            const { user } = getStore();
            try {
                const response = await axios({
                    method: 'PUT',
                    url:`${API_PATH}/user/${userId}/edit`,
                    data: formData,
                    headers: {Authorization: `Bearer ${user.token}` }
                });
                
                dispatch({
                    type: constants.SEND_EDIT_USERDATA_SUCCESS,
                    payload: response.data
                })
            } catch (e) {
                dispatch({
                    type: constants.GET_USERS_FAIL,
                    payload: e.message,
                });
            }
        }
    },
    deleteUser( userId: string) {
        return async (dispatch: any, getStore: any) => {
            const { user } = getStore();
            try {
                const response = await axios({
                    method: 'DELETE',
                    url: `${API_PATH}/user/${userId}/delete`,
                    headers: {Authorization: `Bearer ${user.token}` }
                })
                dispatch({
                    type: DELETE_USER,
                })

            } catch(e) {
                dispatch({
                    type: constants.GET_USERS_FAIL,
                    payload: e.message,
                })
            }
        }
    },
    uploadAvatar(userId: string, avatar: File) {
        return async (dispatch:any, getStore:any) => {
            const { user } = getStore();
            try {
              const imgData = new FormData();
              imgData.append('file', avatar);
              imgData.append('userId', userId)
              const imgResponse = await axios({
                method: 'POST',
                url: `${API_PATH}/upload/avatar`,
                data: imgData,
                headers: {Authorization: `Bearer ${user.token}`}
              })
      
              dispatch({
                type: constants.UPLOAD_AVATAR,
                payload: imgResponse.data,
              })
             } catch (e) {
              dispatch({
                type: GET_USERS_FAIL,
                payload: e.messsage,
              });
            }
          }
    },
}