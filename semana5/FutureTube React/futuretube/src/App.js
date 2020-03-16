import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <header>
        <h1>FutureTube</h1> <input type="text" placeholder="Buscar"></input>
    </header>
    <main>
        <section>

          <article><a href= "media1.html"><video src= "http://soter.ninja/videos/1.mp4"></video><span>Vídeo 1</span></a></article>
          <article><a href= "media2.html"><video src= "http://soter.ninja/videos/2.mp4"></video><span>Vídeo 2</span></a></article>
          <article><a href="media3.html"><video src= "http://soter.ninja/videos/3.mp4"></video><span>Vídeo 3</span></a></article>
          <article><a href="media4.html"><video src= "http://soter.ninja/videos/4.mp4"></video><span>Vídeo 4</span></a></article>
          <article><a href="media5.html"><video src= "http://soter.ninja/videos/5.mp4"></video><span>Vídeo 5</span></a></article>
          <article><a href="media6.html"><video src= "http://soter.ninja/videos/6.mp4"></video><span>Vídeo 6</span></a></article>
          <article><a href="media7.html"><video src= "http://soter.ninja/videos/7.mp4"></video><span>Vídeo 7</span></a></article>
          <article><a href="media8.html"><video src= "http://soter.ninja/videos/8.mp4"></video><span>Vídeo 8</span></a></article>

        </section>
    </main>
    <footer>
        <h2>Todos os direitos reservados.</h2>
    </footer>
    </div>
  );
}

export default App;
