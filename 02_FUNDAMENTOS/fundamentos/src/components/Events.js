const Events = () => {
  const handleClick = (e) => {
    console.log(e)
    console.log('clicou')
  }

  const printSomething = (param) => {
    if (param) {
      return <p>Parâmetro true</p>
    } else {
      return <p>Parâmetro false</p>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Evento de clique</button>
      </div>
      <div>
        <button onClick={() => console.log('vc clicou direto na função')}>Clique na função direto dentro do evento</button>
      </div>
      {printSomething(false)}
    </div>
  )
}

export default Events
