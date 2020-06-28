import { CREATE_COMMENT } from './../../constants/index';
import { GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_FAIL, GET_ONE_POST_SUCCESS, LEAVE_POSTS_PAGE, GET_NEXT_POST_SUCCESS, CREATE_LIKE, CREATE_LIKE_ON_POST_PAGE, POST_DELETE_SUCCESS, RESET_DELETE_INDICATOR, CREATE_POST_SUCCESS } from '../../constants';

interface IPostState {
  isLoggedIn: boolean,
  isPostLoading: boolean,
  errMsg: string,
  postsList: any,
  postData?: any;
  postNumber: number;
  isDeleted: boolean;
  commentLoading: boolean;
  redirect:boolean;
}

const initialState = {
  isLoggedIn: false,
  isPostLoading: false,
  errMsg: '',
  postsList: Array(),
  postNumber: 4,
  isDeleted: false,
  commentLoading:false,
  redirect:false,
};

const postReducer = (state: IPostState = initialState, action: any) => {
  switch (action.type) {

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        postData: action.payload,
        redirect:true,
      }
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
      const index = state.postsList.findIndex((post: any) => post._id === action.payload.postId );
      const nextPostData = state.postsList[index];
      nextPostData.likesCount = action.payload.likesCount;
      const newPostsList = [...state.postsList]
      newPostsList.splice(index, 1, nextPostData);
      return {
        ...state,
        postsList: newPostsList,
      }
    case CREATE_LIKE_ON_POST_PAGE:
      const newPostData = {...state.postData};
      newPostData.likesCount = action.payload.likesCount;
      return {
        ...state,
        postData: newPostData,
      }
    case POST_DELETE_SUCCESS:
      return {
        ...state,
        postData: null,
        isDeleted: true,
      }
    case RESET_DELETE_INDICATOR: {
      return {
        ...state,
        isDeleted: false,
      }
    }
    case CREATE_COMMENT: {
      const postData = {...state.postData}
      postData.comments.push(action.payload)
      return {
        ...state,
        postData: postData,
        commentLoading: false,
      }
    }

    default:
      return state
  }
}

export default postReducer;