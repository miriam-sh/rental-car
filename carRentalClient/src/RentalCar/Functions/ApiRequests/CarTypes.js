import axios from "./BasicUrl"

export const getCarTypes = async () => {
    return await axios.get(`CarTypes`)
}