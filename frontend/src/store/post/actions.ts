import axios from 'axios';
import { GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_FAIL, GET_ONE_POST_SUCCESS, LEAVE_POSTS_PAGE, GET_NEXT_POST_SUCCESS, CREATE_LIKE } from '../../constants';

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
        url: 'http://localhost:5000/api/postAll',
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
  fetchCategories(category: string) {
    return async (dispatch:any, getStore:any) => {
      const store = getStore();
      dispatch({
        type: GET_POSTS_LOADING,
      });
      try {
      const response = await axios.get(`http://localhost:5000/api/posts/${category}`);
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
      const store = getStore();
      dispatch({
        type:GET_POSTS_LOADING
      });
      console.log('!!!!!!!!', postId)
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${postId}`)
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
    console.log(postNumber)
    return async (dispatch:any, getStore:any) => {
      dispatch({
        type: GET_POSTS_LOADING,
      });
      try {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:5000/api/postAll/next',
        headers:{postNumber}
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
    }
},
  publishPost(formData:{}, img:File) {
    return async (dispatch:any, getStore:any) => {
      dispatch({
        type: GET_POSTS_LOADING,
      });
      try {
        console.log(formData)
      // const response = await axios({
      //   method: 'POST',
      //   url: 'http://localhost:5000/api/writing',
      //   data: formData,
      //   headers: {Authorization: 'Bearer e98649fd-c5fd-4471-a7f8-bb6de401d689'}
      // });

      const imgData = new FormData();
      imgData.append('file', img);
      imgData.append('postId', '5ef27b10b5a641522819ac4c')
      const imgResponse = await axios({
        method: 'POST',
        url: 'http://localhost:5000/upload',
        data: imgData,
        headers: {Authorization: 'Bearer e98649fd-c5fd-4471-a7f8-bb6de401d689'}
      })
      } catch (e) {
        dispatch({
          type: GET_POSTS_FAIL,
          payload: e.messsage,
        });
      }
    }
  },
  createLike(postId: string) {
    return async (dispatch: any) => {
      try {
        const response = await axios({
          method: 'GET',
          url: `http://localhost:5000/api/${postId}/like`,
          headers: {Authorization: 'Bearer e98649fd-c5fd-4471-a7f8-bb6de401d689'}
        })
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
  }
}