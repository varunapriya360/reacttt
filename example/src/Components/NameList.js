import React from 'react'
import Person from './Person'

function NameList() {
    //const names = ['thomas','marie','ryan']
    //const nameList = names.map(name => <h1>{name}</h1>) 
  //return <div>{nameList}</div>
  const persons = [
    {
        id: 1,
        name: 'thomas',
        age: 25,
        hobby: 'painting'
    },
    {
        id: 2,
        name: 'marie',
        age: 29,
        hobby: 'singing' 
    },
    {
        id: 3,
        name: 'ryan',
        age: 20,
        hobby: 'cooking'
    }
  ]
  const personList = persons.map(person => <Person key={person.id} person={person}/> )
  return <div>{personList}</div>
}

export default NameList