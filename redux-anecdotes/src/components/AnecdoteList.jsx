import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div>
        <div>
            {anecdote.content}
        </div>
        <div>
            has {anecdote.votes}
            <button onClick={handleClick}>vote</button>
        </div>
        </div>
    )
}

const Anecdotes = () => {

    const dispatch = useDispatch()
    //const anecdotes = useSelector(state => state.anecdotes.sort((a,b) => b.votes - a.votes))
    const anecdotes = useSelector(state => {
        if (state.filter === '') {
            return [...state.anecdotes].sort((a,b) => b.votes - a.votes)
        }
        return [...state.anecdotes].filter(a => a.content.startsWith(`${state.filter}`)).sort((a,b) => b.votes - a.votes)
    })

    return (
        <div>
            {anecdotes.map(anecdote =>
                <Anecdote 
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={()=>dispatch(voteAnecdote(anecdote.id))}/>
            )}
        </div>
    )
}

export default Anecdotes