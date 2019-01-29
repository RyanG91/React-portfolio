import styled from 'styled-components'

const HeadingOne = styled.h1`
    font-family: 'Kreon', serif;

    @media(min-width: 768px) {
        font-size: 50px;
    }
`

const HeadingTwo = styled.h2`
    font-family: 'Kreon', serif;

    @media(min-width: 768px) {
        font-size: 35px;
    }
`

const HeadingThree = styled.h3`
    font-family: 'Kreon', serif;

    @media(min-width: 768px) {
        font-size: 30px;
    }
`

export { HeadingOne, HeadingTwo, HeadingThree }