const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
    {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  console.log(props)
    return (
    <div>
      <Part part = {props.parts[0].name} exercise = {props.parts[0].exercises}/>
      <Part part = {props.parts[1].name} exercise = {props.parts[1].exercises}/>
      <Part part = {props.parts[2].name} exercise = {props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>{props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</div>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }



  return (
    <div>
      <Header course = {course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
export default App

//
