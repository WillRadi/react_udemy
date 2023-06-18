import './MyForm.css'

const MyForm = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome..." />
        </div>
        {/* uso mais comum: tag label envolvendo o input */}
        <label>
          {/* span só é usado pra estilização */}
          <span>Email:</span>
          <input type="email" name="email" placeholder="Digite seu e-mail..." />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm;
