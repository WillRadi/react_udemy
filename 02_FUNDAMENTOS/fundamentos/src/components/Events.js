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
    </div>
  )
}

export default Events
