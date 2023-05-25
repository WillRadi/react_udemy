import { useState } from "react";

const ListRender = () => {
  const [list] = useState(['Tobias', 'Matias', 'Peixe boi'])
  const [users] = useState([
    {id: 1, name: 'Tobias'},
    {id: 2, name: 'Matias'},
    {id: 3, name: 'Peixe boi'}
  ])

  return (
    <div>
      <p>Lista sem ID</p>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>Lista com ID</p>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender
