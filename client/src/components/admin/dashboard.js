import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Posts from './posts'
import NewPost from './newPost'

// STYLES
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`
const SideBar = styled.div`
    height: 100vh;
    width: 20vw;
    background-color: pink;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
`
const View = styled.div`
    height: 100vh;
    width: 70vw;
`

class Dashboard extends Component {
    state = {
        window: 'Posts'
    }

    updateWindow = async (e) => {
        e.preventDefault();
        const wName = e.target.name
        this.setState({
            window: wName
        })
    }

    render() {
        return (
            <Wrapper>

                <SideBar>
                    <button name="Posts" onClick={this.updateWindow}>All Posts</button>
                    <button name="NewPost" onClick={this.updateWindow}>New Post</button>
                    <Link to={"/"}>Exit Admin</Link>
                </SideBar>

                <View>
                    {this.state.window === "Posts" ? <Posts /> : null }
                    {this.state.window === "NewPost" ? <NewPost /> : null }
                </View>

            </Wrapper>
        );
    }
}

export default Dashboard;