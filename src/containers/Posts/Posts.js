import React, {Component} from 'react';
import {deletePost, fetchPosts} from "../../store/actions/postActions";
import {Button, Card} from "reactstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  async deletePost (postID) {

  }
  render() {
    return this.props.posts.map(post => (
        <Card key={post.id}>
          {post.title}
          {post.date}
        <Link to={`news/${post.id}`}>Read full post >> </Link>
          <Button onClick={this.deletePost(post.id)}>DELETE</Button>
        </Card>
        )
    );
  }
}
const mapStateToProps = state => ({
  posts : state.posts,
});
const mapDispatchToProps = dispatch => ({
  fetchPosts : ()=> dispatch(fetchPosts()),
  deletePost: (postID)=> dispatch(deletePost())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);