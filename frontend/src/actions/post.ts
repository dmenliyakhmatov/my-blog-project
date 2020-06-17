
import axios from 'axios';
import { GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_FAIL, GET_ONE_POSTS_SUCCESS } from '../constants';

export default {
  fetchAllPosts() {
    return async (dispatch:any, getStore:any) => {
      const store = getStore();
      dispatch({
        type: GET_POSTS_LOADING,
      });
      try {
      const response = await axios.get('http://localhost:5000/api/postAll');
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
  fetchOnePost(postId: string) {
    return async (dispatch: any, getStore: any) => {
      const store = getStore();
      dispatch({
        type:GET_POSTS_LOADING
      });
      try {
        const response = await axios.get(`http://localhost:5000/api/post/${postId}`)
        dispatch({
          type: GET_ONE_POSTS_SUCCESS,
          payload: response.data,
        });
      } catch(e) {
        dispatch({
          type: GET_POSTS_FAIL,
          payload: e.messsage,
        });
      }
    }
  }

}