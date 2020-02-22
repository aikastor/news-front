import React, {Component} from 'react';
import {deletePost, fetchPosts} from "../../store/actions/postActions";
import {Button, Card, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  async deletePost (postID) {
    await this.props.deletePost(postID);
    this.props.fetchPosts();
  }
  render() {
    return (
        this.props.posts.map(post => {
          const date = post.date;
          return(
            <Card key={post.id} style={{padding: '7px', marginTop: '5px'}} >
              <Row>
                <Col xs='2'>
                  {post.image &&
                  <img src={'http://localhost:8000/uploads/' + post.image}
                       style={{maxHeight: '100px', maxWidth: '100px'}}
                       alt={post.title}/>}
                </Col>
                <Col xs='10'>
                  <h6>{post.title}</h6>
                  <i style={{color: 'grey'}}>{date.replace('T', ' ')}</i>
                  <br/>
                  <Link to={`news/${post.id}`}>Read full post >> </Link>
                </Col>
              </Row>
              <Row>
                <Col className="clearfix">
                  <Button
                      onClick={() =>this.deletePost(post.id)}
                      className="btn btn-danger float-right"
                  >
                    DELETE</Button>
                </Col>
              </Row>
            </Card>
            )}
    ));
  }
}
const mapStateToProps = state => ({
  posts : state.posts,
});
const mapDispatchToProps = dispatch => ({
  fetchPosts : ()=> dispatch(fetchPosts()),
  deletePost: (postID)=> dispatch(deletePost(postID))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);