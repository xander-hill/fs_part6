import AnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useEffect } from 'react'
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import anecdotes from './services/anecdotes'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService.getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [])

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