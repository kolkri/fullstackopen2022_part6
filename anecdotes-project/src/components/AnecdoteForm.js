import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const getId = () => (100000 * Math.random()).toFixed(0)

    const add = (event) => {
        event.preventDefault()
        const newAnecdote = event.target.anecdote.value
        const anecdoteObj = {
          content: newAnecdote,
          id: getId(),
          votes: 0
        }
        event.target.anecdote.value = ''
        dispatch(addAnecdote(anecdoteObj))
        dispatch(showNotification(`you added new anecdote '${newAnecdote}'`))
        setTimeout(() => {
          dispatch(showNotification(null))
        }, 5000)
      }
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={add}>
                <div><input name="anecdote"/></div>
                <button type="submit" >create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm