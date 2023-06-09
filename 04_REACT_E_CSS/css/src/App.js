import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import MyTitle from './components/MyTitle';

function App() {
  const [redTitle, setRedTitle] = useState(true)

  const handleTitle = () => {
    redTitle ? setRedTitle(false) : setRedTitle(true)
  }

  return (
    <div className="App">
      <h1>React e CSS</h1>
      <MyComponent />
      <p>Paragrafo no App.js (exemplificando vazamento de CSS)</p>
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        Parágrafo com css inline
      </p>
      <h2 className={redTitle ? "red-title" : "title"}>Título com classe dinâmica</h2>
      <button onClick={handleTitle}>Alterar cor do título</button>
      <MyTitle />
      <h2 className="my_title">MyTitle fora do componente</h2>
    </div>
  );
}

export default App;
