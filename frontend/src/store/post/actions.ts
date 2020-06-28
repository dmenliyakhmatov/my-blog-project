import { CREATE_COMMENT, CREATE_COMMENTS_FAIL } from './../../constants/index';
import { API_PATH } from './../../constants/apiPath';
import { change } from 'redux-form';
import axios from 'axios';
import { GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_FAIL, GET_ONE_POST_SUCCESS, LEAVE_POSTS_PAGE, GET_NEXT_POST_SUCCESS, CREATE_LIKE, CREATE_LIKE_ON_POST_PAGE, POST_DELETE_SUCCESS, RESET_DELETE_INDICATOR, CREATE_POST_SUCCESS } from '../../constants';

export default {
  fetchAllPosts() {
    return async (dispatch:any, getStore:any) => {
      const store = getStore();
      dispatch({
        type: GET_POSTS_LOADING,
      });
      try {
      const response = await axios({
        method: 'GET',
        url: `${API_PATH}/posts/all`,
      });
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: response.data
      })
      } catch (e) {
        dispatch({
          type: GET_POSTS_FAIL,
          payload: e.messsage,
        });
      }
    }
  },
  fetchCategoriesPosts(category: string) {
    return async (dispatch:any, getStore:any) => {
      const store = getStore();
      dispatch({
        type: GET_POSTS_LOADING,
      });
      try {
      const response = await axios.get(`${API_PATH}/posts/categories/${category}`);
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: response.data
      })
      } catch (e) {
        dispatch({
          type: GET_POSTS_FAIL,
          payload: e.messsage,
        });
      }
    }
  },
  fetchOnePost(postId: string, postNumber: number) {
    return async (dispatch: any, getStore: any) => {
      const {user} = getStore();

      dispatch({
        type:GET_POSTS_LOADING
      });
      try {
        const response = await axios({
          method: 'GET',
          url: `${API_PATH}/posts/${postId}`,
          headers: {Authorization: `Bearer ${user.token}` }
        
        })
        dispatch({
          type: GET_ONE_POST_SUCCESS,
          payload: response.data,
        });
      } catch(e) {
        dispatch({
          type: GET_POSTS_FAIL,
          payload: e.messsage,
        });
      }
    }
  },
  fetchNextPosts(postNumber: number) {
    return async (dispatch:any, getStore:any) => {
      dispatch({
        type: GET_POSTS_LOADING,
      });
      try {
      const response = await axios({
        method: 'GET',
        url: `${API_PATH}/postAll/next`,
        headers:{postNumber},
      });
      dispatch({
        type: GET_NEXT_POST_SUCCESS,
        payload: response.data
      })
      } catch (e) {
        dispatch({
          type: GET_POSTS_FAIL,
          payload: e.messsage,
        });
      }
    }
  },

  fetchNextCategoriesPosts(postNumber: number, category: string) {
    return async (dispatch:any, getStore:any) => {
      dispatch({
        type: GET_POSTS_LOADING,
      });
      try {
      const response = await axios({
        method: 'GET',
        url: `${API_PATH}/posts/categories/${category}/next`,
        headers:{postNumber},
      });
      dispatch({
        type: GET_NEXT_POST_SUCCESS,
        payload: response.data
      })
      } catch (e) {
        dispatch({
          type: GET_POSTS_FAIL,
          payload: e.messsage,
        });
      }
    }
  },

  resetPostCounter() {
    return {
        type: LEAVE_POSTS_PAGE,
    };
},
  publishPost(formData:{}, img?:File) {
    return async (dispatch:any, getStore:any) => {
      try {
        console.log(formData)
      const response = await axios({
        method: 'POST',
        url: `${API_PATH}/writing`,
        data: formData,
        headers: {Authorization: 'Bearer e98649fd-c5fd-4471-a7f8-bb6de401d689'}
      });
      if(img) {
        const imgData = new FormData();
        imgData.append('file', img);
        imgData.append('postId', response.data)
        const imgResponse = await axios({
          method: 'POST',
          url: `${API_PATH}/upload`,
          data: imgData,
          headers: {Authorization: 'Bearer e98649fd-c5fd-4471-a7f8-bb6de401d689'}
        })

        dispatch({
          type: CREATE_POST_SUCCESS,
          payload: response.data,
        })
      } } catch (e) {
        dispatch({
          type: GET_POSTS_FAIL,
          payload: e.messsage,
        });
      }
    }
  },

  editPost(formData:{}, postId: string, img?:File,) {
    return async (dispatch:any, getStore:any) => {
      dispatch({
        type: GET_POSTS_LOADING,
      });
      try {
        console.log('action', formData)
      const response = await axios({
        method: 'PUT',
        url: `${API_PATH}${postId}/edit`,
        data: formData,
        headers: {Authorization: 'Bearer e98649fd-c5fd-4471-a7f8-bb6de401d689'}
      });
      
      if(img) {
        const imgData = new FormData();
        imgData.append('file', img);
        imgData.append('postId', '5ef27b10b5a641522819ac4c')
        const imgResponse = await axios({
          method: 'POST',
          url: 'http://localhost:5000/upload',
          data: imgData,
          headers: {Authorization: 'Bearer e98649fd-c5fd-4471-a7f8-bb6de401d689'}
        })
      } 
    } catch (e) {
        dispatch({
          type: GET_POSTS_FAIL,
          payload: e.messsage,
        });
      }
    }
  },

  createLike(postId: string, postPage?: boolean) {
    return async (dispatch: any, getStore: any) => {
      const {user} = getStore();
      try {
        const response = await axios({
          method: 'GET',
          url: `${API_PATH}/${postId}/like`,
          headers: {Authorization: `Bearer ${user.token}` }
        })
        postPage ? 
        dispatch({
          type: CREATE_LIKE_ON_POST_PAGE,
          payload: response.data,
        })
        :
        dispatch({
          type: CREATE_LIKE,
          payload: response.data,
        })
      } catch(e) {
        dispatch({
          type: GET_POSTS_FAIL,
          payload: e.messsage,
        });
      }
    }
  },

  deletePost (postId: string) {
    return async (dispatch: any, getStore: any) => {
      const { user } = getStore();
      try {
        const response = await axios({
          method: 'DELETE',
          url: `${API_PATH}/${postId}/delete`,
          headers: {Authorization: `Bearer ${user.token}` }
        })
        dispatch({
          type: POST_DELETE_SUCCESS,
        })
      } catch(e) {
        dispatch({
          type: GET_POSTS_FAIL,
          payload: e.messsage,
        });
      }
    }
  },
  
  createComment(postId: string, formData: {postComment: string}) {
    return async (dispatch: any, getStore: any) => {
      const { user } = getStore();
      try {
        const response = await axios({
          method: 'POST',
          url: `http://localhost:5000/api/${postId}/comments`,
          headers: {Authorization: `Bearer ${user.token}`},
          data: {commentBody:formData.postComment}
        })
        dispatch({
          type: CREATE_COMMENT,
          payload: response.data
        })
      } catch(e) {
        dispatch({
          type: CREATE_COMMENTS_FAIL,
          payload: e.messsage,
        });
      }
      
    }
  },

  resetDelete() {
    return {
      type: RESET_DELETE_INDICATOR,
    }
  }
}