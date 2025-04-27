import axios from "./BasicUrl"

export const getCars = async () => {
    return await axios.get(`Cars`)
}

export const postCars = async (car) => {
    return await axios.post(`Cars`, car)
}

export const putCarsAvailable = async (id) => {
    return await axios.put(`Cars/available?id=${id}`)
}

export const putCars = async (id, car) => {
    return await axios.put(`Cars?id=${id}`, car)
}

export const removeCars = async (id) => {
    return await axios.delete(`Cars?id=${id}`)
}