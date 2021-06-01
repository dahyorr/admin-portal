import {combineReducers} from 'redux'
import {FETCH_USERS} from '../actions/types'

const authReducer = (state={}, action) => {
    switch(action.type){
        default:
            return state
    }
}

const usersReducer = (state=[], action) => {
    switch(action.type){
        case FETCH_USERS:
            return [...action.payload]
        default:
            return state
    }
}

export default combineReducers({
    auth: authReducer,
    users: usersReducer,
})