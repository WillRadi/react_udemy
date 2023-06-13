import UserDetails from "./UserDetails"

const UserList = () => {
  const userDb = [
    {id: 1, name: "Alberto Roberto", age: 40, occupation: "Padeiro"},
    {id: 2, name: "Dayse Maria", age: 18, occupation: "Estudante"},
    {id: 3, name: "João Augusto", age: 10, occupation: "Estudante"},
    {id: 4, name: "Ana Moana", age: 20, occupation: "Pescadora"}
  ]

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Profissão</th>
            <th>Pode tirar CNH</th>
          </tr>
        </thead>
        <tbody>
          {userDb.map((user) => (
            <UserDetails key={user.id} name={user.name} age={user.age} occupation={user.occupation}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserList
