import './App.css';
import Coala from './assets/coala.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

const cars = [
  {id: 1, brand: 'Fiat', km: 0, color: 'Branco', newCar: true},
  {id: 2, brand: 'GM', km: 11120, color: 'Amarelo', newCar: false},
  {id: 3, brand: 'Ferrari', km: 12321, color: 'Vermelho', newCar: false}
]

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
        <ListRender />
        <ConditionalRender />
        <ShowUserName name="Tobias" />
        {/* Props com destructuring */}
        <CarDetails brand="VW" km={12333} color="Branco" newCar={false} />
        {/* Perguntar pro Almir: pq q aqui tem q ser parêntese e não chaves?? */}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
        ))}
      </div>
    </div>
  );
}

export default App;
