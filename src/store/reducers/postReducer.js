import {FETCH_POSTS_SUCCESS, FETCH_SINGLE_POST_SUCCESS} from "../actions/postActions";
import {FETCH_COMMENTS_SUCCESS} from "../actions/commentActions";

const initialState = {
  posts: [],
  comments: [],
  singlePost: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {...state, posts: action.posts};
    case FETCH_COMMENTS_SUCCESS:
      return {...state, comments: action.comments};
    case FETCH_SINGLE_POST_SUCCESS:
      return {...state, singlePost: action.post};
    default:
      return state
  }
};

export default postsReducer;
