import axios from "./BasicUrl"

export const getDriveTypes = async () => {
    return await axios.get(`DriveTypes`)
}

export const postDriveTypes = async (driveType) => {
    return await axios.post(`DriveTypes`, driveType)
}

export const putDriveType = async (id, price) => {
    return await axios.put(`DriveTypes?id=${id}&&price=${price}`)
}

export const removeDriveType = async (id) => {
    return await axios.delete(`DriveTypes?id=${id}`)
}