import { USER_INPUT_LOGIN_CHANGED, USER_TRY_TO_LOG_IN, GET_USERS_SUCCESS, GET_USERS_LOADING, GET_USERS_FAIL, USER_TRY_TO_LOG_OUT} from '../constants';

const initialState = {
    userLogin: '',
    isLoggedIn: false,
    activePageId: 0,
    pages: [
        { pageId: 0, name: 'Главная', path: '/' },
        { pageId: 1, name: 'Статьи', path: '/articles' },
        { pageId: 2, name: 'Пользователи', path: '/users' },
        { pageId: 3, name: 'Контакты', path: '/about' },
    ],
    users: [],
    isUsersLoading: false,
    errMsg: '',
};

const actionExample = {
    type: 'ТИП ДЕЙСТВИЯ КОТОРОЕ ПРОИЗОШЛО',
    payload: 'ДАННЫЕ КОТОРЫЕ ПРИШЛИ ОТ ПОЛЬЗОВАТЕЛЯ'
};

export default function userReducer(state = initialState, action:any) {
    switch (action.type) {
        case USER_INPUT_LOGIN_CHANGED:
            return {
                ...state,
                userLogin: action.payload,
            };

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
                users: action.payload,
                isUsersLoading: false,
            };

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
