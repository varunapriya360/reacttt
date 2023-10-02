import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>i am {person.name} and im {person.age} years old and i also love  {person.hobby}</h2>
    </div>
  )
}



export default Person