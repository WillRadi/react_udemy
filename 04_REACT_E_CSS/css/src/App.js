import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>React e CSS</h1>
      <MyComponent />
      <p>Paragrafo no App.js (exemplificando vazamento de CSS)</p>
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        Parágrafo com css inline
      </p>
    </div>
  );
}

export default App;
