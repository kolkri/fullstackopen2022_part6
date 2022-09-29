import { useSelector, useDispatch } from 'react-redux'
import { votedAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Filter from './Filter'


const AnecdoteList = () => {
    const filter = useSelector(state => state.filter)
    
    const anecdotes = useSelector(state => state.anecdotes)
    const filteredAnecdotes = filter === 'all' 
    ? anecdotes
    : anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter))
    
    const dispatch = useDispatch()

    const handleVote = (id) => {
      dispatch(votedAnecdote(id))
      const votedA = anecdotes.find(n => n.id === id)
      dispatch(setNotification(`you voted '${votedA.content}'`, 3))
    }

    
    
    return (
        <>
        <Filter />
        {[...filteredAnecdotes].sort((a,b) => b.votes - a.votes).map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => handleVote(anecdote.id)}>vote</button>
              </div>
            </div>
          )}
          </>
    )

}

export default AnecdoteList