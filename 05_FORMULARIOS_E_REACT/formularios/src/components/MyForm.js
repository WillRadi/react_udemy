import './MyForm.css'
import { useState } from 'react'
const MyForm = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name)
    console.log(email)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome..."  onChange={handleName} />
        </div>
        {/* uso mais comum: tag label envolvendo o input */}
        <label>
          {/* span só é usado pra estilização */}
          <span>Email:</span>
          <input type="email" name="email" placeholder="Digite seu e-mail..." onChange={(e) => setEmail(e.target.value)} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm;
