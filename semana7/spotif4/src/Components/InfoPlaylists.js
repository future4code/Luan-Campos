import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Imagem = styled.img `
  height: 12px;
  cursor: pointer;
`

class InfoPlaylists extends React.Component {
    constructor(props){
      super(props)

      this.state = {
          playlists: [],
          infoPlaylist: [],
          botaoAdicionar: false,
          novaMusica: "",
          addAutor: "",
          link: "",
          idPlaylist: ""
      }
    
    }
  
    pegaPlaylist = () => {
      axios.get('https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists',{
        headers: {
          auth: "luan-hamilton"
        }
      }).then(response => {
        this.setState({playlists: response.data.result.list})
        console.log("Playlists: ", response.data.result.list)


      }).catch(err => {
          alert("Erro ao pegar playlist, tente novamente.")
        console.log("Deu erro ", err)
      })
    }

    deletaPlaylist = (id) => {
      axios.delete(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${id}`, {
        headers: {
          auth: "luan-hamilton"
        }
      }).then(() => {
        this.pegaPlaylist()
        console.log("Playlist deletada")
      }).catch(err => {
        console.log(err)
      })
    }

    pegaInfoPlaylist = (id) => {
      axios.get(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${id}/songs`, {
        headers: {
          auth: "luan-hamilton"
        }
      }).then(res => {
        this.setState({infoPlaylist: res.data.result.musics})
        console.log("Informações da playlist: ", res.data.result)


      }).catch(err => {
        console.log("Erro ", err)
      })

      this.onClickApareceBotao()
    }

    adicionaMusica = (id) => {
      const body = {
        "name": this.state.novaMusica, 
        "artist": this.state.addAutor,
        "url": this.state.link
      }

      axios.post(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${id}/songs`, body, {
        headers: {
          auth: "luan-hamilton"
        }
      }).then(res => {

        console.log(res)
      }).catch(err => {
        console.log(err)
      })

    }

    onChangeMusica = (e) => {
      this.setState({novaMusica: e.target.value})
    }

    onChangeAutor = (e) => {
      this.setState({addAutor: e.target.value})
    }

    onChangeLink = (e) => {
      this.setState({link: e.target.value})
    }

    onClickApareceBotao = () => {
      this.setState({botaoAdicionar: !this.state.botaoAdicionar})
    }

    render() {
      const mapMusicas = () => this.state.infoPlaylist.map(musicas => {
      return <p key = {musicas.id}>Nome: {musicas.name} - Cantor/Banda: {musicas.artist} <button>Play</button><button>Pause</button></p>
      })

      const renderizaPlaylists = () => this.state.playlists.map(plist => {
          return <p key= {plist.id}>
            Playlist: {plist.name}
            <button onClick = {() => this.pegaInfoPlaylist(plist.id)}>Detalhes</button>  
            <Imagem onClick = {() => this.deletaPlaylist(plist.id)} alt = {"deletar"} src = {require("../images/cross.svg")}/>
            </p>
      })

      return (
        <div>
            <button onClick= {this.pegaPlaylist}>Carregar Playlists</button>
            {renderizaPlaylists()}
            {this.state.botaoAdicionar && (
              <div>
                {mapMusicas()}
                <input placeholder= {"Musica..."} value= {this.state.novaMusica} onChange= {this.onChangeMusica}></input>
                <input placeholder= {"Autor..."} value= {this.state.addAutor} onChange= {this.onChangeAutor}></input>
                <input placeholder= {"Link..."} value= {this.state.link} onChange= {this.onChangeLink}></input>
                <button onClick= {() => this.adicionaMusica(this.state.idPlaylist)}>Adicionar</button>
              </div>
            )}            
        </div>
      );
    }
  }
  export default InfoPlaylists;
  