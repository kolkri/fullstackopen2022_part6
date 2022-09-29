import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import Filter from './Filter'


const AnecdoteList = () => {
    const filter = useSelector(state => state.filter)
    
    const anecdotes = useSelector(state => state.anecdotes)
    const filteredAnecdotes = filter === 'all' 
    ? anecdotes
    : anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter))
    
    const dispatch = useDispatch()

    const handleVote = (id) => {
      dispatch(vote(id))
      const votedAnecdote = anecdotes.find(n => n.id === id)
      dispatch(showNotification(`you voted '${votedAnecdote.content}'`))
        setTimeout(() => {
          dispatch(showNotification(null))
        }, 5000)
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