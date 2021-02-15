import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, deletePost } from './store/postsActions';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import AddPostForm from './components/AddPostForm';
import Welcome from './components/Welcome';
import ProjectHead from './components/ProjectHead';


class App extends Component{

  addNewPost = (user) =>{
    this.props.addPost(user)
  }

  deletePost =(id)=>{
    this.props.deletePost(id)
  }

  editPost =(id, updatedPost) => {
    this.setState({
      users: this.props.users.map(user => user.id === id ? updatedPost : user)
    })
  }

  render() {
    return (
      <>
        <Navbar />
        <Welcome />
        <AddPostForm addPost = {this.addNewPost}/>
        <ProjectHead />
        <Posts usersData={this.props.users} 
        deletePost= {this.deletePost}
        editPost={this.editPost}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = {
  addPost: addPost,
  deletePost: deletePost
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
