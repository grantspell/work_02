import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// font-family: 'Anton', sans-serif;
// font-family: 'Abel', sans-serif;
// font-family: 'Rokkitt', serif; ** letter-spacing: 40px
// font-family: 'Libre Barcode 39 Text', cursive;
// font-family: 'Playfair Display SC', serif;
// font-family: 'Arapey', serif; X
// font-family: 'Vidaloka', serif;
// font-family: 'Gentium Book Basic', serif;
// font-family: 'Julius Sans One', sans-serif;
// font-family: 'Lora', serif;

// #EAAE95 : "pretty peachy" : top blush on google image

// STYLES
const Wrapper = styled.div`
    background-color: rgba(246, 178, 128, .4);
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, .7);
    font-size: 3vw;
    letter-spacing: 37px;
    font-family: 'Rokkitt', serif;
    animation: mymove 10s infinite;

    a {
        text-decoration: none;
        color: rgba(255,255,255, .7);
    }
    a:hover {
        color: white;
    }
    p {
        font-size: 2vw;
        letter-spacing: 50px;
    }

    @media (max-width: 755px) {
        height: 100vh;
        width: 100vw;

        letter-spacing: 10px;

        p {
            letter-spacing: 10px;
        }
    }
    .URL {
        letter-spacing: 10px;
        font-size: 3vw;
    }
`

class Splash extends Component {
    state = {
        atHidden: false,
        time: {}
    }

    componentWillMount () {
        this.getTime();
    }

    getTime = async () => {
        const res = await axios.get('http://worldclockapi.com/api/json/est/now')
        const timeData = res.data.currentDateTime
        const time = timeData.substr(timeData.length - 5);
        this.setState({ time: time })
        console.log(this.state)
    }

    hovered = (e) => {
        e.preventDefault();
        console.log('HIT');
        this.setState({ atHidden: !this.state.atHidden });
    }

    render() {
        return (
            <Wrapper>
                <h1 onMouseOver={this.hovered}><a href="http://www.instagram.com/kaylanspell/">@kaylanspell</a></h1>
                <p className="URL">kaylanspell.com</p>
            </Wrapper>
        );
    }
}

export default Splash;