import axios from "./BasicUrl"

export const getUsers = async () => {
    return await axios.get(`Users`)
}

export const addNewUser = async (user) => {
    console.log('user api', user);
    return await axios.post(`Users`, user)
}