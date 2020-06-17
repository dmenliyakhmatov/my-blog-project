import { GET_USERS_SUCCESS, GET_USERS_FAIL, GET_POSTS_SUCCESS, GET_POSTS_FAIL } from './../constants/index';
import { GET_POSTS_LOADING } from './../constants';

const initialState = {
  isLoggedIn: false,
  isPostLoading: false,
  errMsg: '',
  postsList: [],
  postData:{}
};

const postReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POSTS_LOADING: 
      return {
          ...state,
          isPostLoading: true,
      };
    
    case GET_POSTS_SUCCESS: 
      return {
          ...state,
          postsList: action.payload,
          isPostLoading: false,
      }

    case GET_POSTS_FAIL:
      return {
          ...state,
          errMsg: action.payload,
          isPostLoading: false,
      }
    default:
      return state
  }
}

export default postReducer;