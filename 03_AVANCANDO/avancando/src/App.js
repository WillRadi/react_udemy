import './App.css';
import Coala from './assets/coala.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Container from './components/Container';
import FunctionAsProp from './components/FunctionAsProp';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';
import UserList from './components/UserList';
import { useState } from 'react';

function App() {
  const cars = [
    {id: 1, brand: 'Fiat', km: 0, color: 'Branco', newCar: true},
    {id: 2, brand: 'GM', km: 11120, color: 'Amarelo', newCar: false},
    {id: 3, brand: 'Ferrari', km: 12321, color: 'Vermelho', newCar: false}
  ]

  const showMessage = () => {
    console.log('clicou no componente')
  }

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

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
        <Container anotherProp="isso é uma prop">
          <p>Isso está sendo escrito diretamente no App. É a prop children</p>
        </Container>
        <FunctionAsProp myProp={showMessage} />
        {/* State lift */}
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage} />
        <h2>Chalege</h2>
        <UserList />
      </div>
    </div>
  );
}

export default App;
