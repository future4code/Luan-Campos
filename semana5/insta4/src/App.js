import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const Input = styled.input `
  margin-bottom: 5px;
  color: tomato;
  font-size: 1em;
  border: 2px solid tomato;
  border-radius: 3px;
`

const Button = styled.button `
  margin-bottom: 5px;
  color: tomato;
  font-size: 1em;
  border: 2px solid tomato;
  border-radius: 3px;
`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          nome: "paulinha", fotoUsuario: "https://picsum.photos/id/33/50/50", fotoPost: "https://picsum.photos/200/163"
        },
        {
          nome: "luan", fotoUsuario: "https://picsum.photos/id/35/50/50", fotoPost: "https://picsum.photos/200/160"
        },
        {
          nome: "lucaszkx", fotoUsuario: "https://picsum.photos/id/40/50/50", fotoPost: "https://picsum.photos/200/162"
        },
      ],
      valorInputNome: "",
      valorInputFotoUser: "",
      valorInputFotoPost: ""
    }
  }

  adicionaPost = () => {
    const novoPost = {
      nome: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUser,
      fotoPost: this.state.valorInputFotoPost
    }

    const novoPosts = [...this.state.posts, novoPost]

    this.setState({posts: novoPosts})
  }

  onChangeInputNome = event => {
    this.setState({ valorInputNome: event.target.value})
  }

  onChangeInputFotoUsuario = event => {
    this.setState({ valorInputFotoUser: event.target.value})
  }

  onChangeInputFotoPost = event => {
    this.setState({ valorInputFotoPost: event.target.value})
  }


  
  render() {

    const divPost = this.state.posts.map((post, index) => {
      return (
        <div className = {'app-container'}>
          <Post
          nomeUsuario = {post.nome}
          fotoUsuario = {post.fotoUsuario}
          fotoPost = {post.fotoPost}
          key = {index}
          />
        </div>
      )
    })

    return (
    <div className = {'app-container'}>
      <Input
        value = {this.state.valorInputNome}
        onChange = {this.onChangeInputNome}
        placeholder = {"Nome"}
      />

      <Input
        value = {this.state.valorInputFotoUser}
        onChange = {this.onChangeInputFotoUsuario}
        placeholder = {"Foto do usuário"}
      />

      <Input
        value = {this.state.valorInputFotoPost}
        onChange = {this.onChangeInputFotoPost}
        placeholder = {"Foto do post"}
      />

      <Button onClick={this.adicionaPost}>Adicionar Post</Button>
      {divPost}
    </div>
    )

  }
}

export default App;