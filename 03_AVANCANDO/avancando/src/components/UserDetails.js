const UserDetails = ({ name, age, occupation }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{occupation}</td>
        <td>{age >= 18 ? "Sim" : "Não"}</td>
      </tr>
    </>
  )
}

export default UserDetails
