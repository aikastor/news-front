import axiosApi from "../../axiosApi";
import {deleteCommentSuccess} from "./commentActions";

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const FETCH_SINGLE_POST_SUCCESS = 'FETCH_SINGLE_POST_SUCCESS';

export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';

export const fetchPostsSuccess = (posts) => ({type: FETCH_POSTS_SUCCESS, posts});
export const createPostSuccess = () => ({type: CREATE_POST_SUCCESS});
export const deletePostSuccess = () => ({type: DELETE_POST_SUCCESS});
export const fetchSinglePostSuccess= (post) => ({type: FETCH_SINGLE_POST_SUCCESS, post});

export const fetchPosts = () => {
  return async  (dispatch)=> {
    try {
      const response = await axiosApi.get('http://localhost:8000/news');
      dispatch(fetchPostsSuccess(response.data));
    } catch (e) {
      console.error(e)
    }
  }
};
export const createPost = (post)=> {
  return async (dispatch) => {
    try {
      await  axiosApi.post('http://localhost:8000/posts', post);
      dispatch(createPostSuccess())
    } catch (e) {
      console.error(e)
    }
  }
};

export const fetchSinglePost = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.get(`http://localhost:8000/recipes/${id}`);
      dispatch(fetchSinglePostSuccess(response.data))
    } catch (e) {
      console.log(e)
    }
  }
};
export const deletePost = (postID) => {
  return async (dispatch) => {
    try {
      await  axiosApi.delete(`http://localhost:8000/news/${postID}`);
      dispatch(deletePostSuccess())
    } catch (e) {
      console.error(e)
    }

  }
};