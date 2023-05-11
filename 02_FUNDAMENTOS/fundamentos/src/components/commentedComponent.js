const CommentedComponent = () => {
  // JSX sempre vai estar no return, é o resultado do meu componente
  return (
    // deve haver sempre uma tag encapsulando o jsx
    <div>
      {/* alguns atribus do JSX devem ser diferente do html pra não dar conflito (tipo o className == class) */}
      <p className="paragrafo_teste">Este é um parágrafo no componente comentado</p>
    </div>
  )
}

export default CommentedComponent
