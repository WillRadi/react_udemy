const CommentedComponent = () => {
  const paragfrafo = 'Este parágrafo está num template expression'
  // JSX sempre vai estar no return, é o resultado do meu componente
  return (
    // deve haver sempre uma tag encapsulando o jsx
    <div>
      {/* alguns atribus do JSX devem ser diferente do html pra não dar conflito (tipo o className == class) */}
      <p className="paragrafo_teste">Este é um parágrafo no componente comentado</p>
      {/* TUDO que executando no JSX entre chaves, vira código JS */}
      <p>{paragfrafo}</p>
    </div>
  )
}

export default CommentedComponent
