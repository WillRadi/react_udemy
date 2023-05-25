import './App.css';
import Coala from './assets/coala.jpg'
import ManageData from './components/manageData'

function App() {
  return (
    <div className="App">
      <h1>Seção 3: Avançando com React</h1>
      <h3>Esta imagem está em /public</h3>
      <div>
        <img src="/alpaca.jpg" alt="alpaca" />
        {/* Imagem em public = basta passar /nome_do_arquivo.jpg */}
      </div>
      <h3>Esta imagem está em src</h3>
      <div>
        <img src={Coala} alt="coala" />
      </div>
      <h3>useState</h3>
      <div>
        <ManageData />
      </div>
    </div>
  );
}

export default App;
