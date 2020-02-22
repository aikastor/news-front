import axiosApi from "../../axiosApi";

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';

export const fetchCommentsSuccess = (comments) => ({type: FETCH_COMMENTS_SUCCESS, comments});
export const addCommentSuccess = () => ({type: ADD_COMMENT_SUCCESS});
export const deleteCommentSuccess =() => ({type: DELETE_COMMENT_SUCCESS});

export const fetchComments = () => {
  return async (dispatch) => {
    try {

    }
  }
};
