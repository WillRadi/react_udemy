const Container = ({ children, anotherProp }) => {
  return (
    <>
      <h2>Container</h2>
      {children}
      <h2>Prop</h2>
      {anotherProp}
    </>
  )
}

export default Container
