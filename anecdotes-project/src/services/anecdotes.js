import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getId = () => (100000 * Math.random()).toFixed(0)

const createNew = async (content) => {
    const object = { content, id: getId(), votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const updateOne = async (id) => {
    const allAnecdotes = await axios.get(baseUrl)
    const anecdoteToChange = allAnecdotes.data.find(n => n.id === id)
    const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
    }
    const response = await axios.put(`${baseUrl}/${id}`, changedAnecdote)
    return response.data
}



export default {
    getAll,
    createNew,
    updateOne,
}