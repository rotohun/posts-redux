import React, { Component } from 'react'

class Posts extends Component {

  constructor(props){
    super(props)
    this.state ={
      posts: [

      ]
    }
  }
  
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then( data => this.setState({posts: data}))
  }

  render() {
    const postItems = this.state.posts.map( posts => (
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

export default Posts;
