import React, {Component} from 'react';
import {createPost} from "../../store/actions/postActions";
import {connect} from "react-redux";
import PostForm from "../../components/PostForm/PostForm";

class NewPost extends Component {

  createPostHandler = async formData => {
    await this.props.createPost(formData);
    this.props.history.push('/');
  };

  render() {
    return (
        <>
          <h1>Add new Post</h1>
          <PostForm
              onSubmit={this.createPostHandler}
          />
        </>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  createPost: (postData) => dispatch(createPost(postData)),
});
export default connect(null, mapDispatchToProps)(NewPost);