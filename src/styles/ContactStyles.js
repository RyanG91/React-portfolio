import styled from 'styled-components'

const Background = styled.div`
  background-color: #778899;
  padding-top: 2em;
  padding-bottom: 2em;

  @media(min-width: 768px) {
      padding-top: 5em;
      padding-bottom: 5em;
  }
`

const ContactBox = styled.div`
  display: flex;
  font-size: 20px;
  font-family: 'News Cycle', sans-serif;
  padding: 2em;
  margin-left: 100px;
  margin-right: 100px;
  border-radius: 40px;
  background-color: white;

  @media(min-width: 768px) {
      padding-top: 5em;
      padding-bottom: 5em;
  }
`

export { Background, ContactBox }