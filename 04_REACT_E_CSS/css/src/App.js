import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>React e CSS</h1>
      <MyComponent />
      <p>Paragrano no App.js (exemplificando vazamento de CSS)</p>
    </div>
  );
}

export default App;
