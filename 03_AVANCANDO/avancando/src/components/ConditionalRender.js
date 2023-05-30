import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(true)
  const [name, setName] = useState('Tobias')

  const changeName = () => {
    name === 'Tobias' ? setName('Matias') : setName('Tobias')
  }

  return (
    <div>
      <h1>Renderização condicional</h1>
      {x && <p>X é true</p>}
      {!x && <p>X é false</p>}

      <h1>If ternário</h1>
      {name === 'Tobias' ? (
        <p>Meu nome é Tobias</p>
      ) : (
        <p>Meu nome é Matias</p>
      )}
      <button onClick={changeName}>Mudar o nome</button>
    </div>
  )
}

export default ConditionalRender
