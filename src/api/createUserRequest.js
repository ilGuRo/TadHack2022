import axios from 'axios'


export const createUserRequest = async(user) =>
    await axios.post('http://localhost:3001/users', user)