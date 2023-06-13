import "./MyComponent.css"

const MyComponent = () => {
  return (
    <div>
      <h1>Título do MyComponent</h1>
      <p>Parágrafo sem classe específica do MyComponent</p>
      <p className="my-comp-paragraph">Parágrafo com classe específica do MyComponent</p>
    </div>
  )
}

export default MyComponent;
