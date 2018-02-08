import React, { Component } from 'react';
import styled from 'styled-components';

// COMPONENTS
import Splash from './splash';
import FirstPage from './first.page'

// STYLES
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

class Directory extends Component {
    render() {
        return (
            <Wrapper>

                <Splash />

                <FirstPage />

            </Wrapper>
        );
    }
}

export default Directory;