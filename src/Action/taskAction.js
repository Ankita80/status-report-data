import { ADD_TASK, GET_TASK } from './taskActionTypes'

export const addTask = (task) => {
    console.log("Action dispatched");
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const getTask = (task) => {
    console.log("Action dispatched");
    return {
        type: GET_TASK,
        payload: task
    }
}

export const getTaskData = () => {
    return (dispatch) => {
    fetch('http://localhost:8000/tasks')
    .then(res => {
        return res.json()    
    })
    .then(data => {
        dispatch(getTask(data))
    })
    }
}

export const addTaskData = (data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return (dispatch) => {
    fetch('http://localhost:8000/tasks', requestOptions)
    .then(res => {
        return res.json()    
    })
    .then(data => {
        dispatch(getTaskData())
    })
    }
}

export const deleteTaskData = (id) => {
    return (dispatch) => {
    fetch(`http://localhost:8000/tasks/${id}`, {method: 'DELETE'})
    .then((res)=>{
        return res.json()    
    })
    .then(data => {
        dispatch(getTaskData())
    })
    }
}