import './MyForm.css'
import { useState } from 'react'
const MyForm = ({user}) => {
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const [role, setRole] = useState(user ? user.role : '')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name)
    console.log(email)
    console.log(role)

    // Limpa campos após envio
    setName('')
    setEmail('')
    setRole('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome..."
            onChange={handleName}
            value={name}
          />
        </div>
        {/* uso mais comum: tag label envolvendo o input */}
        <label>
          {/* span só é usado pra estilização */}
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Função</span>
          <select
            name='role'
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="admin">Admin</option>
            <option value="peao">Peão</option>
            <option value="boiadeiro">Boiadeiro</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm;
