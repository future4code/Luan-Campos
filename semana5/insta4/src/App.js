import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/33/50/50'}
          fotoPost={'https://picsum.photos/200/163'}
        />

        <Post
          nomeUsuario={'luan'}
          fotoUsuario={'https://picsum.photos/id/10/50/50'}
          fotoPost={'https://picsum.photos/200/164'}
        />

        <Post
          nomeUsuario={'lucaszx'}
          fotoUsuario={'https://picsum.photos/id/7/50/60'}
          fotoPost={'https://picsum.photos/200/165'}
        />        
      </div>
    );
  }
}

export default App;
