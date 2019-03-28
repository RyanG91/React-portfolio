import styled from 'styled-components'

const Background = styled.div`
  background-color: #778899;
  padding-top: 4em;
  padding-bottom: 4em;
`

const AboutMeBox = styled.div`
  display: flex;
  font-size: 20px;
  font-family: 'News Cycle', sans-serif;
  padding: 2em;
  padding-top: 5em;
  padding-bottom: 5em;
  margin-left: 100px;
  margin-right: 100px;
  border-radius: 40px;
  background-color: white;
`

const AboutMePic = styled.img`
  float: right;
`
// p affects all <p> stylings in jsx
const AboutMeMargin = styled.div`
  margin-right: 100px;

  p {
    @import url('https://fonts.googleapis.com/css?family=News+Cycle');
  }
`

export { Background, AboutMeBox, AboutMePic, AboutMeMargin }