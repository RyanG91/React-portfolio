import styled from 'styled-components'


const HeadingOne = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Kreon');
  font-family: 'Kreon', serif;

  @media(min-width: 768px) {
      font-size: 50px;
  }
`

const HeadingTwo = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Kreon');
  font-family: 'Kreon', serif;

  @media(min-width: 768px) {
      font-size: 35px;
  }
`

const HeadingThree = styled.h3`
  @import url('https://fonts.googleapis.com/css?family=Kreon');
  font-family: 'Kreon', serif;

  @media(min-width: 768px) {
      font-size: 30px;
  }
`

const p = styled.p`
  @import url('https://fonts.googleapis.com/css?family=News+Cycle');
`

export { HeadingOne, HeadingTwo, HeadingThree }