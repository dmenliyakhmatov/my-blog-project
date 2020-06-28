import { UserData } from './../../components/PageWrapper/PageHeader/index';
import { REGISTRATION_SUCCESS, LEAVE_POSTS_PAGE, GET_EDIT_USERDATA, SEND_EDIT_USERDATA_SUCCESS, DELETE_USER, LOGIN_FAIL, GET_DATA_FROM_STORAGE, UPLOAD_AVATAR } from './../../constants/index';
import { GET_USERS_SUCCESS, GET_USERS_LOADING, GET_USERS_FAIL, USER_TRY_TO_LOG_OUT, GET_USER_POST_SUCCESS, LOGIN_WAITING, LOGIN_SUCCESS, SET_MODAL_STATE, USER_TRY_TO_REGISTRATE } from '../../constants';
import store from 'store';

interface IUserState {
    userLogin?: string;
    currentUser?: {
        currentId: string;
        currentName?: string;
        currentSurname?: string;
        avatarUrl?: string;
    };
    editData?: {
        name: string;
        surname: string;
        email: string;
        birthDate: string;
        about: string;
    };
    token?: string;
    isLoggedIn: boolean;
    modal: boolean,
    isCurrentUserPage: boolean;
    sendingData: boolean;
    loading: boolean;
    errMsg?: string | null;
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
    currentUser: {
        currentId:'',
    },
    // token: 'e98649fd-c5fd-4471-a7f8-bb6de401d689',
    isLoggedIn: false,
    modal: false,
    loading: false,
    sendingData: false,
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
        case LOGIN_FAIL: {
            console.log('reducer',action.payload)
            return {
                ...state,
                errMsg: action.payload,
            }
        }
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
                'avatarUrl',
                action.payload.avatarUrl,
            )
            localStorage.setItem(
                'token',
                action.payload.token,
            )
            console.log(action.payload)
            return {
                ...state,
                currentUser: {
                    currentId: action.payload.userId,
                    currentName: action.payload.name,
                    currentSurname: action.payload.surname,
                    avatarUrl: action.payload.avatarUrl,
                },
                token: action.payload.token,           
                loading:false,
                isLoggedIn: true,
                modal: false,
                errMsg: null,
            };
        case USER_TRY_TO_REGISTRATE:
            return {
                ...state,
                loading:true,
            };
        case REGISTRATION_SUCCESS: 
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
                'avatarUrl',
                action.payload.avatarUrl,
                );
            localStorage.setItem(
                'token',
                action.payload.token,
            );
            return {
                ...state,
                token: action.payload.token,
                currentUser: {
                    currentId: action.payload.userId,
                    currentName: action.payload.name,
                    currentSurname: action.payload.surname,
                    avatarUrl: action.payload.avatarUrl,
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

        case GET_USER_POST_SUCCESS: {
            const prevPosts = state.userPosts;
            const nextPostNumber = state.postNumber + 4;
            return {
                ...state,
                userPosts: [...prevPosts, ...action.payload.posts ],

                postNumber: nextPostNumber
            }
        }
        case GET_EDIT_USERDATA: {  
            return {
                ...state,
                sendingData: true,
                editData: action.payload,
                
            }
        }
        case SEND_EDIT_USERDATA_SUCCESS: {
            console.log(action.payload)
            localStorage.setItem(
                'currentName',
                action.payload.name
                );
            localStorage.setItem(
                'currentSurname',
                action.payload.surname
                );
            const nextCurrentUser = {...state.currentUser}
            return {
                ...state, 
                currentUser: {
                    ...nextCurrentUser,
                    currentName: action.payload.name,
                    currentSurname: action.payload.surname,
                },
                userData: {...action.payload},
                editData: {...action.payload},
                sendingData: false
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
            case DELETE_USER: {
                localStorage.clear()
                return{
                    ...state,
                    userData:{},
                    currentUser: {},
                    isLoggedIn: false,
                }
            }
        case UPLOAD_AVATAR: {
            localStorage.setItem('avatarUrl', action.payload);
            const currentUser: any = {...state.currentUser};
            currentUser.avatarUrl = action.payload;
            const userData: any = {...state.userData};
            userData.avatarUrl = action.payload;
            return {
                ...state,
                currentUser: currentUser, 
                userData: userData,
            }
        }
        default:
            return state;
    }
}
