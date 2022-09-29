// import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'


const AnecdoteForm = (props) => {

    // const dispatch = useDispatch()

    const add = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        // dispatch(addAnecdote(content))
        // dispatch(setNotification(`you added anecdote '${content}'`, 3))
        props.addAnecdote(content)
        props.setNotification(`you added anecdote '${content}'`, 3)
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
const mapStateToProps = (state) => {
    return {
        notification: state.notification
    }
  }
const mapDispatchToProps = {
    addAnecdote,
    setNotification
}

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm