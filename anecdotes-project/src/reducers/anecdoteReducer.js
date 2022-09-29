import { createSlice } from '@reduxjs/toolkit'
import aneddoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(a => a.id !== id ? a : changedAnecdote)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { vote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await aneddoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const addAnecdote = content => {
  return async dispatch => {
    const newAnecdote =  await aneddoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}
export const votedAnecdote = id => {
  return async dispatch => {
    await aneddoteService.updateOne(id)
    dispatch(vote(id))
  }
}
export default anecdoteSlice.reducer