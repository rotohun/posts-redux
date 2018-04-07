import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions'

class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextprops){
    if(nextprops.newPost){
      this.props.posts.unshift(nextprops.newPost)
    }
  }

  render() {
    const postItems = this.props.posts.map( posts => (
      <div key={posts.id}>
        <h3>{posts.title}</h3>
        <p>{posts.body}</p>
      </div>
    ))
    return (
      <div>
        { postItems }
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})


export default connect(mapStateToProps, { fetchPosts })(Posts);