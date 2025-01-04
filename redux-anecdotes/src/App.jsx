import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from './reducers/anecdoteReducer'
import { createAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Anecdotes />
      <Filter />
      <AnecdoteForm />
    </div>
  )
}

export default App