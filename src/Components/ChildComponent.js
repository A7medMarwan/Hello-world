import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=>props.show('child')}>Click</button>
      <p> Karim adel thabet 
      </p>
    </div>
  )
}

// export default ChildComponent
