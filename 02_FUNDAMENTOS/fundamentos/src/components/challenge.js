const Challenge = () => {
  const value_a = 10
  const value_b = 2

  const sumValues = () => {
    console.log(`A soma dos números secretos é ${value_a + value_b}`)
  }

  return (
    <div>
      <button onClick={sumValues}>Somar valores do challenge</button>
    </div>
  )
}

export default Challenge
