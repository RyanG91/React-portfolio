import styled from 'styled-components'
// The styling for the nav bar can be found here.

const NavBarStyle = styled.div`
  border: 5px solid black;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  overflow: hidden;
  background-color: white;
  position: fixed;
  top: 0;
  width: 99.25%;
  z-index: 1;
`

export { NavBarStyle }