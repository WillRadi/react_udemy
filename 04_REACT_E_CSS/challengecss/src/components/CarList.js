import CarDetails from "./CarDetails";
import style from './CarList.module.css'

const CarList = () => {
  const cars = [
    {id: 1, model: 'Gol', color: 'Prata', year: '2020'},
    {id: 2, model: 'Parati', color: 'Azul', year: '1987'},
    {id: 3, model: 'Veraneio', color: 'Vascaína', year: '1990'}
  ]

  return (
    <table className={style.main_table}>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Cor</th>
          <th>Ano</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <CarDetails key={car.id} model={car.model} color={car.color} year={car.year} />
        ))}
      </tbody>
    </table>
  )
}

export default CarList;
