import { ADD_TASK, GET_TASK } from '../Action/taskActionTypes'

const initialState = {
    tasks: [],
    loading: false
}

function rootReducer(state = initialState, action){
    switch(action.type) {
        case GET_TASK :
            console.log(action.payload)
            return {
                ...state,
                tasks: action.payload
            }
        
        default:
            return state;
    }
}

export default rootReducer;


