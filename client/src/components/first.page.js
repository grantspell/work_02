import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// STYLES
const Wrapper = styled.div`
    height: auto;
    width: 100vw;
    background-color: white;
    display: flex;
    justify-content: space-around;
    font-family: 'Rokkitt', serif;
`
const Feed = styled.div`
    height: auto;
    width: 100vw;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const Links = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    a {
        text-decoration: none;
        color: #fdb39b;
        font-size: 20px;
        padding: 0px 0px 15px 15px;
    }
`
const PostWrapper = styled.div`
    height: 400px;
    width: 50vw;
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        text-align: center;
    }
    .postImage {
        width: 450px;
    }
`

class FirstPage extends Component {
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
        console.log(this.state)
    }

    render() {
        return (
            <Wrapper>

                <Feed>
                    {this.state.posts.map(post => {
                        return (
                            <PostWrapper key={post._id} _id={post.id}>
                                <h1>{post.title}</h1>
                                <img className="postImage" src={post.imgURL}/>
                                <p>{post.content}</p>
                            </PostWrapper>
                        )
                    })}
                </Feed>

            </Wrapper>
        );
    }
}

export default FirstPage;