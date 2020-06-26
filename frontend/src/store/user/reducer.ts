import { REGISTRATION_SUCCESS, LEAVE_POSTS_PAGE, GET_DATA_FROM_STORAGE } from './../../constants/index';
import { GET_USERS_SUCCESS, GET_USERS_LOADING, GET_USERS_FAIL, USER_TRY_TO_LOG_OUT, GET_USER_POST_SUCCESS, LOGIN_WAITING, LOGIN_SUCCESS, SET_MODAL_STATE, USER_TRY_TO_REGISTRATE } from '../../constants';

interface IUserState {
    userLogin?: string;
    currentUser?: {
        currentName: string;
        currentSurname: string,
        avatarUrl?: string,
    };
    token?: string;
    isLoggedIn: boolean;
    modal: boolean,
    isCurrentUserPage: boolean;
    loading: boolean;
    errMsg: string;
    postNumber: number;
    userData?: {
        name: string,
        surname: string,
        userId: string,
    }
    userPosts: []
    
}

const initialState: IUserState = {
    isCurrentUserPage: false,
    // token: 'e98649fd-c5fd-4471-a7f8-bb6de401d689',
    isLoggedIn: false,
    modal: false,
    loading: false,
    errMsg: '',
    postNumber: 4,
    userPosts: []
};

export default function userReducer(state = initialState, action:any) {
    switch (action.type) {

        case SET_MODAL_STATE: 
            return {
                ...state,
                modal: action.payload
            }
        case LOGIN_WAITING:
            return {
                ...state,
                loading:true,
            };
        case GET_DATA_FROM_STORAGE:
            return{
                ...state,
                currentUser: action.payload.currentUser,         
                token: action.payload.token,
                isLoggedIn: true,
            }

        case LOGIN_SUCCESS:
            localStorage.setItem(
                'currentId', 
                action.payload.userId);
            localStorage.setItem(
                'currentName',
                action.payload.name)
            localStorage.setItem(
                'currentSurname', 
                action.payload.surname);
            localStorage.setItem(
                'token',
                action.payload.token,
            )
            return {
                ...state,
                currentUser: {
                    currentId: action.payload.userId,
                    currentName: action.payload.name,
                    currentSurname: action.payload.surname,
                },
                token: action.payload.token,           
                loading:false,
                isLoggedIn: true,
                modal: false,
            };
        case USER_TRY_TO_REGISTRATE:
            return {
                ...state,
                loading:true,
            };
        case REGISTRATION_SUCCESS: 
            return {
                ...state,
                token: action.payload.token,
                currentUser: {
                    currentId: action.payload.userId,
                    currentName: action.payload.name,
                    currentSurname: action.payload.surname,
                },              
                loading:false,
                modal: false,
                isLoggedIn:true,
            }
        case USER_TRY_TO_LOG_OUT:
            return {
                ...state,
                currentUser: {},
                token: '',
                isLoggedIn: false,
            };

        case GET_USERS_LOADING:
            return {
                ...state,
                isUsersLoading: true,
            };

        case GET_USERS_SUCCESS:
            return {
                ...state,
                userData: action.payload.userInfo,
                userPosts: action.payload.userPosts,
                isCurrentUserPage: action.payload.isCurrentUserPage,
                isUsersLoading: false,
            };

        case GET_USER_POST_SUCCESS:{
            const prevPosts = state.userPosts;
            const nextPostNumber = state.postNumber + 4;
            return {
                ...state,
                    userPosts: [...prevPosts, ...action.payload.posts ],

                postNumber: nextPostNumber
            }
}
        case GET_USERS_FAIL:
            return {
                ...state,
                errMsg: action.payload,
                isUsersLoading: false,
            };
        case LEAVE_POSTS_PAGE:
            return {
                ...state,
                postNumber: 4,
            }
        default:
            return state;
    }
}
