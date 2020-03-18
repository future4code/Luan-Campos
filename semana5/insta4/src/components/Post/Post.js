import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvarDesmarcado from '../../img/save-24px.svg'
import iconeSalvarMarcado from '../../img/save-marked-24px.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      curtido: false,
      salvo: false,
      numeroCurtidas: 0,
      comentando: false,
      numeroComentarios: 0,
    }
  }

  onClickCurtida = () => {
    if(!this.state.curtido){
      console.log('Curtiu!')
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }   
  }

  onClickSalvar = () => {
    if(!this.state.salvo){
      this.setState({
        salvo: true
      })
    } else {
      this.setState({
        salvo: false
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando // Muda o valor de 'comentando' para true
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1 // Quando enviar o comentário, a barrinha some e aumenta em 1 o numero de comentários.

    })
  }

  render() {
    let iconeCurtida
    let iconeSalvando

    if(this.state.salvo) {
      iconeSalvando = iconeSalvarMarcado
    } else {
      iconeSalvando = iconeSalvarDesmarcado
    }

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto   // Agora o ícone muda
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/> // após enviar o comentário, a barrinha de comentário some
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}  // Esse é para as curtidas
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeSalvando}
          onClickIcone={this.onClickSalvar}  // Esse é para os comentários
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}  // Esse é para os comentários
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post