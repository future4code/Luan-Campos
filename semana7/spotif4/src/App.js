import React from 'react';
import CriaPlaylist from './Components/CriaPlaylist';
import styled from 'styled-components'
import InfoPlaylists from './Components/InfoPlaylists'

const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 200px;
`

class App extends React.Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){

  }
  
  render() {
    return (
      <Container>
        <CriaPlaylist/>
        <InfoPlaylists/>
      </Container>
    );
  }
}
export default App;
