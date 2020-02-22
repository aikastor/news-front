import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";


class PostForm extends Component {

  state = {
    title: '',
    image: null,
    text: '',
  };
  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  fileChangeHandler = (e) => {
    this.setState({
      [e.target.name] : e.target.files[0]
    })
  };
  submitHandler = e => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('date', new Date().toISOString());

    Object.keys(this.state).forEach(key => {
      if(this.state[key]) {
        formData.append(key, this.state[key])
      }
    });
    this.props.onSubmit(formData)
  };
  async deletePost (postID) {
    await this.props.deletePost(postID);
    this.props.fetchPosts();
  }
  render() {
    return (
        <div>
          <Form onSubmit={this.submitHandler}>
            <FormGroup row>
              <Label for="title" sm={2}>Title</Label>
              <Col sm={10}>
                <Input required
                    type="text" name="title"
                    id="title" placeholder="Enter title"
                    value={this.state.title}
                    onChange={this.inputChangeHandler}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="image" sm={2}>Image</Label>
              <Col sm={10}>
                <Input type="file" name="image"
                       id="image"
                       onChange={this.fileChangeHandler}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="text" sm={2}>Text</Label>
              <Col sm={10}>
                <Input type="textarea" name="text"
                       id="text" required
                       value={this.state.text}
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
        </div>
    );
  }
}

export default PostForm;