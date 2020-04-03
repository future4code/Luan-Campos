import React from 'react';
import axios from 'axios';

class CriaPlaylist extends React.Component {
  constructor(props){
    super(props)
  
    this.state = {
        inputPlaylist: ""
      }
  }

  onChangePlaylist = (e) => {
    this.setState({inputPlaylist: e.target.value})
  }

  criaPlaylist = () => {
    const body = {
      "name": this.state.inputPlaylist
    }
    axios.post('https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists', body, {
      headers: {
        auth: "luan-hamilton"
      }
    }).then(response => {
      alert("Playlist criada!")
    }).catch(err => {
        alert("Erro ai criar playlist, tente novamente")
      console.log("Deu erro ", err)
    })
  }

  render() {
    return (
      <div>
        <input placeholder= {"Nome da playlist"} value = {this.state.inputPlaylist} onChange= {this.onChangePlaylist}></input>
        <button onClick= {this.criaPlaylist}>Criar Playlist</button>
      </div>
    );
  }
}
export default CriaPlaylist;
