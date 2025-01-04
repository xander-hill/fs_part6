import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from './reducers/anecdoteReducer'
import { createAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/AnecdoteList'

const App = () => {
  return (
    <div>
      <Anecdotes />
      <AnecdoteForm />
    </div>
  )
}

export default App