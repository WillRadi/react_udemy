const Events = () => {
  const handleClick = (e) => {
    console.log(e)
    console.log('clicou')
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Evento de clique</button>
      </div>
      <div>
        <button onClick={() => console.log('vc clicou direto na função')}>Clique na função direto dentro do evento</button>
      </div>
    </div>
  )
}

export default Events
