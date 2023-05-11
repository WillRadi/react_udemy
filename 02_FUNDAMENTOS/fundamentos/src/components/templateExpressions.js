const TemplateExpressions = () => {
  const name = 'William'
  const data = {
    job: 'Dev',
    age: 31
  }

  return(
    <div>
      <h1>Olá!</h1>
      <p>Seu nome é {name} e vc atua como {data.job}, certo?</p>
      <p>Vc parece novo.. está na casa dos {data.age}?</p>
      <p>Acertei! Sou mto foda!</p>
    </div>
  )
}

export default TemplateExpressions
