import { useState } from "react";

const ListRender = () => {
  const [list] = useState(['Tobias', 'Matias', 'Peixe boi'])
  const [users, setUsers] = useState([
    {id: 1, name: 'Tobias'},
    {id: 2, name: 'Matias'},
    {id: 3, name: 'Peixe boi'}
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)
    // setUsers((prevUsers) => {
    //   return prevUsers.filter((userDoPrevUser) => randomNumber !== userDoPrevUser.id)
    // })

    // Pq consigo usar o previous state sem passar argumento pro set?
    setUsers(() => {
      return users.filter((userDoPrevUser) => randomNumber !== userDoPrevUser.id)
    })
  }

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
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender
