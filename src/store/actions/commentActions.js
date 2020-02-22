import axiosApi from "../../axiosApi";

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';

export const fetchCommentsSuccess = (comments) => ({type: FETCH_COMMENTS_SUCCESS, comments});
export const addCommentSuccess = () => ({type: ADD_COMMENT_SUCCESS});
export const deleteCommentSuccess =() => ({type: DELETE_COMMENT_SUCCESS});

export const fetchComments = (newsID) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.get(`http://localhost:8000/commentaries/?news_id=${newsID}`);
      dispatch(fetchCommentsSuccess(response.data));
    } catch (e) {
      console.error(e)
    }
  }
};
export const addComment = (comment) => {
  return async (dispatch) => {
    try {
      await  axiosApi.post('http://localhost:8000/commentaries', comment);
      dispatch(addCommentSuccess())
    } catch (e) {
      console.error(e)
    }

  }
};
export const deleteComment = (commentID) => {
  return async (dispatch) => {
    try {
      await  axiosApi.delete(`http://localhost:8000/commentaries/${commentID}`);
      dispatch(deleteCommentSuccess())
    } catch (e) {
      console.error(e)
    }

  }
};