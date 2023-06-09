const FunctionAsProp = ({myProp}) => {
  return <>
    <h3>Botão chama o componente pai</h3>
    <button onClick={myProp}>Clique aqui e veja o console</button>
  </>
}

export default FunctionAsProp
