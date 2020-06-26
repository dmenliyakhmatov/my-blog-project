import { GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_FAIL, GET_ONE_POST_SUCCESS, LEAVE_POSTS_PAGE, GET_NEXT_POST_SUCCESS, CREATE_LIKE } from '../../constants';

interface IPostInit {
  isLoggedIn: boolean,
  isPostLoading: boolean,
  errMsg: string,
  postsList: any,
  postNumber: 4,
}

const initialState = {
  isLoggedIn: false,
  isPostLoading: false,
  errMsg: '',
  postsList: Array(),
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
      const prevPosts = [...state.postsList];
      const nextPostNumber = state.postNumber + 4;
      console.log(state.postsList)
        return {
            ...state,
            postsList: [ ...prevPosts ,...action.payload],
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
        postNumber: 4,
      }
    case CREATE_LIKE:
      const index = state.postsList.findIndex((post: any) => post._id === action.payload._id );
      const nextPostsList = [...state.postsList]
      state.postsList.splice(index, 1, action.payload);
      return {
        ...state,
        postsList: nextPostsList,
      }
    default:
      return state
  }
}

export default postReducer;