import { eventWrapper } from '@testing-library/user-event/dist/utils'
import { useState } from 'react'

const Filter = ({filter, handleFilter}) => {
  return ( <div> filter shown with <input value={filter} onChange={handleFilter}/> </div>)
}

const PersonForm = ({newName, newNumber, handleNewName, handleNewNumber, addName}) => {
  return (
  <form onSubmit={addName}>
      <div>name: <input value={newName} onChange={handleNewName}/></div>
      <div> number: <input value={newNumber} onChange={handleNewNumber}/></div>
      <div> <button type="submit">add</button> </div>
  </form>
  )
}

const Persons = ({persons, filter}) => {
  return (
    <div>
    {console.log(filter)}
    {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map(person => <p>{person.name} {person.number}</p>)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addName = (event) => {
    if (! persons.some(person => person.name === newName)) {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  } else {
    alert(`${newName} is already in phonebook`)
  }
  }

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter = {filter} handleFilter = {handleFilter}/>
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} addName={addName}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App