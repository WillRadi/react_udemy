const ChangeMessage = ({handleMessage}) => {
  const helloMessage = ['Oi', 'Olá', 'Falaí']

  return (
    <div>
      <button onClick={() => handleMessage(helloMessage[0])}>1</button>
      <button onClick={() => handleMessage(helloMessage[1])}>2</button>
      <button onClick={() => handleMessage(helloMessage[2])}>3</button>
    </div>
  )
}

export default ChangeMessage
