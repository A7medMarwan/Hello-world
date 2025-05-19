
const ChildComponent = ({ show }) => {
  return (
    <div>
      <button onClick={() => show("Child")}>Click</button>
      <p>Test</p>
      <button onClick={()=>props.show('child')}>Click</button>
      <p> Karim adel thabet 
      </p>
    </div>
  )
}

// export default ChildComponent
