import axios from 'axios'
import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from './types'

export const fetchData_action = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess_action = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure_action = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchData_action)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUserSuccess_action(users))
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(fetchUsersFailure_action(errorMessage))
        })
    }
}