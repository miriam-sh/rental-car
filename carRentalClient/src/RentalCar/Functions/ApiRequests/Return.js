import axios from "./BasicUrl"

export const addReturnCar = async (ret) => {
    return await axios.post(`Returns`, ret)
}
