const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      {newCar && <h3>Oportunidade de carro zero!</h3>}
      <ul>
        <li>Marca: {brand}</li>
        <li>Quilometragem: {km}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  )
}

export default CarDetails
