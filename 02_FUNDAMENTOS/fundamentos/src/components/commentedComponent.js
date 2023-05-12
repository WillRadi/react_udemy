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
      <button>Evento de clique</button>
    </div>
  )
}

export default CommentedComponent

// EVENTOS
// Eventos, em react, vão diretamente no JSX
// handleAlgumaCoisa, por definição, é uma função chamada ao executar um evento
// No evento, chama a função sem () pq se não ele executa ao ler a função. Queremos que ela seja executada ao clicar
// Em eventos sempre temos acesso ao elemento `event` (e), que tem os dados do evento
