import { FETCH_POSTS, NEW_POSTS } from './types';

export const fetchPosts = () => dispatch => {
    console.log('fetch posts' )
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then( posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
    }))
}

export const createPost = post => dispatch => {
    console.log('action called' )
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then( res => res.json())
    .then( post => dispatch({
        type: NEW_POSTS,
        payload: post
    }))
}