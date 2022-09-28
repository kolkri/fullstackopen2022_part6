import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const getId = () => (100000 * Math.random()).toFixed(0)

    const addAnecdote = (event) => {
        event.preventDefault()
        const newAnecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch({
          type: 'NEW_ANECDOTE',
          data: {
            content: newAnecdote,
            id: getId(),
            votes: 0
          }
        })
    
      }
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote"/></div>
                <button type="submit" >create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm