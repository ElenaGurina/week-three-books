import './App.css';
import { Books } from './Books';
import imagelibrery from './i.webp'
import imagelib from './i2.webp'

function App() {
  return (
    <div  className='app'>
      <div className='container'>
      <img src = {imagelibrery} width="300px" alt="book"/></div>
      <div className='container'>
      <h1>Давай, почитаем?!!</h1></div>
      <div className='container'>
      <Books/></div>
   
    <div className='container'>
    <img src = {imagelib} width="300px" alt="book"/></div>
    </div>
  );
}

export default App;
