import { GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_FAIL, GET_ONE_POST_SUCCESS, LEAVE_POSTS_PAGE, GET_NEXT_POST_SUCCESS } from '../../constants';

const initialState = {
  isLoggedIn: false,
  isPostLoading: false,
  errMsg: '',
  postsList: [],
  postNumber: 4,
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

      case GET_NEXT_POST_SUCCESS: 
      const nextPostNumber = state.postNumber + 4;
      console.log(state.postsList)
        return {
            ...state,
            postsList: [...state.postsList ,...action.payload],
            isPostLoading: false,
            postNumber: nextPostNumber,
        }

    case GET_POSTS_FAIL:
      return {
          ...state,
          errMsg: action.payload,
          isPostLoading: false,
      }

    case GET_ONE_POST_SUCCESS:
      return {
        ...state,
        postData: action.payload,
        isPostLoading: false,
      }
    case LEAVE_POSTS_PAGE:
      return {
        ...state,
        postNumber: 0,
      }
    default:
      return state
  }
}

export default postReducer;