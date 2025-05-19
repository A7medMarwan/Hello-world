import React, {useState} from 'react'
import ChildComponent from './ChildComponent'


export default function ParentComponent() {
    const [value, setValue] = useState("Parent")

    const showMessage = (child) => {
        alert(`Hello ${value} from ${child}`)
    }
  return (
    <div>
      <ChildComponent show={showMessage}/>
    </div>
  )
}

 
