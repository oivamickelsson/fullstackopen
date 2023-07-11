import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() 
            * (max - min + 1)) + min;
}


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(8).fill(0));
  const [Maxvotes, setMaxValue] = useState(0);

  const handleVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;

    setVotes(updatedVotes);
    console.log(votes);
    const maxIndex = votes.indexOf(Math.max(...votes));
    setMaxValue(maxIndex)
    
  };

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVote} text = "vote"/>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[Maxvotes]}</p> 
      <p>has {votes[Maxvotes]} votes</p>
    </div>
  );

}

export default App