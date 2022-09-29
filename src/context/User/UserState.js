import React, {useReducer} from 'react';
import axios from 'axios';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import type from '../types';

const UserState = (props) =>{
    const initialState = {
        users: [],
        selectedUser: null,
        userSavings: []
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUsers = async() => {
        const res = await axios.get('http://localhost:3001/users/')
        dispatch({
            type: 'GET_USERS',
            payload: res.data,
        })
    }
    const getSelectedUsers = async(user) => {       
        console.log(user)
        selectedUser(user)
        const res = await axios.get('http://localhost:3001/savings/' + user.id)
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data,
        })
        console.log(res.data)
    }

    const selectedUser = async(user) => {
        dispatch({
            type: 'GET_ONE',
            payload: user
        })
    }

    return(
        <UserContext.Provider value ={{
            users: state.users,
            selectedUser: state.selectedUser,
            userSavings: state.userSavings,
            getUsers,
            getSelectedUsers
        }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;