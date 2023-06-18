const CarDetails = ({ model, color, year }) => {
  return (
    <>
      <tr>
        <td>{model}</td>
        <td>{color}</td>
        <td>{year}</td>
      </tr>
    </>
  )
}

export default CarDetails;
