import {useState} from "react"

const ManageData = () => {
  var staticValue = 5
  const [value, setValue] = useState(15) // valor inicial é o param do useState
  console.log(value)
  return (
    <div>
      <p>valor: {staticValue}</p>
      <button onClick={() => staticValue + 10}>soma staticValue</button>
      <p>valor com useState: {value}</p>
      <button onClick={() => setValue(value + 1)}>soma com useState</button>
    </div>
  )
}

export default ManageData
