const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <ul>
        <li>Marca: {brand}</li>
        <li>Quilometragem: {km}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  )
}

export default CarDetails
