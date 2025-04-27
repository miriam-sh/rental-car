import axios from "./BasicUrl"

export const getRentals = async () => {
    return await axios.get(`Rentals`)
}

export const getRentalsById = async (id) => {
    return await axios.get(`Rentals/${id}`)
}

export const postRentals = async (rental) => {
    return await axios.post(`Rentals`, rental)
}

export const putRentalsReturned = async (id) => {
    return await axios.put(`Rentals?id=${id}`)
}