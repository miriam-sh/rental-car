import axios from "./BasicUrl"

export const getCarModels = async () => {
    return await axios.get(`CarModels`)
}

export const postCarModels = async (carModel) => {
    return await axios.post(`CarModels`, carModel)
}