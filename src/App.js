import React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import Posts from "./containers/Posts/Posts";
import {NavLink as RouterNavLink, Route, Switch} from 'react-router-dom';
import NewPost from "./containers/NewPost/NewPost";
import SinglePost from "./containers/SinglePost/SinglePost";

const App = () => {
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={RouterNavLink} to='/'>Posts</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/posts/new">Add new post</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Container>
        <Switch>
          <Route path='/posts/new' exact component={NewPost}/>
          <Route path='/' exact component={Posts}/>
          <Route path='/news/:id' exact component={SinglePost}/>
        </Switch>
      </Container>
    </>
  );
};

export default App;
