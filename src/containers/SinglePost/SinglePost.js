import React, {Component} from 'react';

import {addComment, deleteComment, fetchComments} from "../../store/actions/commentActions";
import {fetchSinglePost} from "../../store/actions/postActions";
import {connect} from "react-redux";
import {Button, Card, Col, Form, FormGroup, Input, Label, Media} from "reactstrap";

class SinglePost extends Component {
  state = {
    author: '',
    comment: '',
  };
  async componentDidMount() {
    await this.props.fetchSinglePost(this.props.match.params.id);
    await this.props.fetchComments(this.props.match.params.id);
    console.log(this.props.singlePost);
  }

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  submitHandler = async e => {
    e.preventDefault();

    const comment = {
      author: this.state.author,
      comment: this.state.comment,
      news_id: this.props.match.params.id
    };

    await this.props.addComment(comment);
    await this.props.fetchComments(this.props.match.params.id);

    this.setState({
      author: '',
      comment: '',
    })
  };
  async deleteComment (commentID) {
    await this.props.deleteComment(commentID);
    this.props.fetchComments(this.props.match.params.id);
  }
  render() {
    return (
        <>
          {/*POST DATA*/}

          {this.props.singlePost && (
              <>
                <h1>{this.props.singlePost.title}</h1>
                <span> Posted at :{this.props.singlePost.date}</span>
                <p>{this.props.singlePost.text}</p>
              </>
          )
          }
          {/*COMMENTS*/}
          {
            this.props.comments.map(comment => (
                <Card>
                  <Media>
                    <Media body>
                      <Media heading>
                        {comment.author ? comment.author : 'Anonymous'}
                      </Media>
                      {comment.comment}
                      <Button type="submit" color='primary'
                              onClick={()=>this.deleteComment(comment.id)}
                      >Delete</Button>
                    </Media>
                  </Media>
                </Card>

            ))
          }
          <Form onSubmit={this.submitHandler}>
            <FormGroup row>
              <Label for="author" sm={2}>Author</Label>
              <Col sm={10}>
                <Input
                    type="text" name="author"
                    id="author" placeholder="Enter author"
                    value={this.state.author}
                    onChange={this.inputChangeHandler}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="text" sm={2}>Text</Label>
              <Col sm={10}>
                <Input type="textarea" name="comment"
                       id="comment" required
                       value={this.state.comment}
                       onChange={this.inputChangeHandler}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{size: 10, offset: 2}}>
                <Button type="submit" color='primary'>Create</Button>
              </Col>
            </FormGroup>
          </Form>
        </>
    );
  }
}
const mapStateToProps = state => ({
  singlePost: state.singlePost,
  comments: state.comments
});
const mapDispatchToProps = dispatch => ({
  addComment: (comment)=> dispatch(addComment(comment)),
  deleteComment: (commentID) => dispatch(deleteComment(commentID)),
  fetchSinglePost: (newsId)=> dispatch(fetchSinglePost(newsId)),
  fetchComments: (newsId)=> dispatch(fetchComments(newsId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);