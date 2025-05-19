import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=>props.show('child')}>Click</button>
    </div>
  )
}

// export default ChildComponent
