import { USER_INPUT_LOGIN_CHANGED, USER_TRY_TO_LOG_IN, GET_USERS_SUCCESS, GET_USERS_LOADING, GET_USERS_FAIL, USER_TRY_TO_LOG_OUT, GET_USER_POST_SUCCESS } from '../../constants';

interface IUserState {
    userLogin: string;
    token?: string;
    isLoggedIn: boolean;
    isCurrentUserPage: boolean;
    isUsersLoading: boolean;
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
    userLogin: '',
    isCurrentUserPage: false,
    token: 'e98649fd-c5fd-4471-a7f8-bb6de401d689',
    isLoggedIn: false,
    isUsersLoading: false,
    errMsg: '',
    postNumber: 4,
    userPosts: []
};

const actionExample = {
    type: 'ТИП ДЕЙСТВИЯ КОТОРОЕ ПРОИЗОШЛО',
    payload: 'ДАННЫЕ КОТОРЫЕ ПРИШЛИ ОТ ПОЛЬЗОВАТЕЛЯ'
};

export default function userReducer(state = initialState, action:any) {
    switch (action.type) {
        case USER_TRY_TO_LOG_IN:
            const login = state.userLogin;
            return {
                ...state,
                isLoggedIn: login === 'admin' || login === 'boss',
            };

        case USER_TRY_TO_LOG_OUT:
            return {
                ...state,
                userLogin: '',
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

        default:
            return state;
    }
}
