import axios from "./BasicUrl"

export const getUserTypes = async () => {
    return await axios.get(`UserType`)
}