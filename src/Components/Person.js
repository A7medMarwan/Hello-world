import React from 'react'

export default function Person({person}) {
  return (
    <div>
      <h1>I'm {person.name}. I'm {person.age}. I know {person.skill}</h1>
    </div>
  )
}


