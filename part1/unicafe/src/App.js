import { useState } from 'react'

const StatisticLine = props => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const Statictics = (props) => {
  if (props.good+props.neutral+props.bad == 0) {
    return (
      <p>no feedback is given</p>
    )
  }
  return (
    
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.good+props.neutral+props.bad} />
          <StatisticLine text="average" value={(props.good-props.bad)/(props.good+props.neutral+props.bad)} />
          <StatisticLine text="positive" value={props.good/(props.good+props.neutral+props.bad)*100+"%"} />
        </tbody>
      </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>statictics</h2>
      <Statictics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
export default App