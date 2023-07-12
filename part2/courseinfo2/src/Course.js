const Header = ({ course }) => <h2>{course.name}</h2>

const Total = ({ parts }) =>  {
  let initialValue = 0
  const total = parts.reduce((s, p) => {
    return  s + p.exercises
  }, initialValue)
  console.log(total)
  return (
    <p style={{fontWeight: "bold"}}> total of {total} exercises</p>
  ) 
  }
  

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 

   <div>
    {parts.map(part => <div key={part.id}> 
    <Part part={part}/>
    </div>)}
   </div>

const Course = ({course}) => 
<div>
  <Header course={course} />
  <Content parts={course.parts} />
  <Total parts={course.parts} />
</div>

export default Course