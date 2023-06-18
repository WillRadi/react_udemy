import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Meu primeiro formulário</h1>
      <MyForm user={{name: "Tobias", email: "tobias@pug.com", role: "peao"}} />
    </div>
  );
}

export default App;
