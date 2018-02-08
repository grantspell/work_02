import React, { Component } from 'react';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
font-family: 'Rokkitt', serif;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

class Admin extends Component {
    state = {

    }

    verifyUser = async () => {

    }

    render() {
        return (
            <Wrapper>
                <form onSubmit={this.verifyUser}>
                    <div>
                    <label htmlFor="UserName">User Name: </label>
                    <input type="text" name="userName" />
                    </div>

                    <div>
                        <label htmlFor="Password">Password: </label>
                        <input type="password" name="password"/>
                        </div>

                        <button>Login</button>
                    </form>
            </Wrapper>
        );
    }
}

export default Admin;