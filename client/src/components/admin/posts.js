import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
    height: 0 auto;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: 'Rokkitt', serif;
`
const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50vw;

    h1 {
        letter-spacing: 20px;
    }
    p {
        letter-spacing: 1px;
    }
    .postIMG {
        width: 50vw;
    }
`

class Posts extends Component {
    state = {
        posts: []
    }

    componentWillMount () {
        this.getPosts();
    }

    getPosts = async () => {
        const res = await axios.get('/api/posts')
        this.setState({
            posts: res.data
        })
    }

    deletePost = async (e) => {
        e.preventDefault();
        const PostID = e.target.name
        console.log(PostID)
        await axios.delete(`/api/posts/${PostID}`)
        this.getPosts();
    }

    editPost = async (e) => {
        e.preventDefault();
        
    }

    render() {
        return (
            <Wrapper>
                {this.state.posts.map(post => {
                    return (
                        <PostWrapper key={post.id}>
                            <h1>{post.title}</h1>
                            <img className="postIMG" src={post.imgURL} />
                            <p>{post.content}</p>
                            <button name={post.id} onClick={this.editPost}>Edit</button>
                            <button name={post.id} onClick={this.deletePost}>Delete</button>
                        </PostWrapper>
                    )
                })}
            </Wrapper>
        );
    }
}

export default Posts;