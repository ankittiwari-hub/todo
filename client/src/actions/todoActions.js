import { GET_TODO, ADD_TODO, DELETE_TODO, TODO_LOADING } from './types'
import axios from 'axios'

export const setTodoLoading = () => {
    return {
        type : TODO_LOADING
    }
}

export const getTodos = () => dispatch => {
    dispatch(setTodoLoading())
    axios
        .get('http://localhost:5000/api/todo')
        .then(res => 
            dispatch({
                type : GET_TODO,
                payload : res.data
            }))
}

export const deleteTodo = (id) => dispatch => {
    axios
        .delete(`http://localhost:5000/api/todo/${id}`)
        .then(res => 
                dispatch({
                    type : DELETE_TODO,
                    payload : id
                })
            )
}

export const addTodo = (todo) => dispatch => {
    axios
        .post('http://localhost:5000/api/todo', todo)
        .then(res => 
                dispatch({
                    type : ADD_TODO,
                    payload : res.data
                })
            )
}