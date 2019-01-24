import styled from 'styled-components'
import background from '../images/background.jpg'

const Background = styled.div`
    background-image: url(${background});
    background-size: auto;
    padding-top: 5em;
    padding-bottom: 5em;
`

const IntroBox = styled.div`
    display: flex;
    padding: 2em
    padding-top: 5em;
    padding-bottom: 5em;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 100px;
    border-radius: 40px;
    background: rgba(255,255,255,0.5);
    justify-content: center;
    font-size: 20px;
`

const WelcomeText = styled.div`
    font-size: 20px;
`

const Logo = styled.img`
    width: 40%;
    float: right;
`

export { Background, IntroBox, WelcomeText, Logo }