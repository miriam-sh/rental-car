import { getCarModels } from "../Functions/ApiRequests/CarModel"
import { getCars } from "../Functions/ApiRequests/Cars"
import { getCarTypes } from "../Functions/ApiRequests/CarTypes"
import { getDriveTypes } from "../Functions/ApiRequests/DriveTypes"
import { getRentals } from "../Functions/ApiRequests/Rentals"
import { addReturnCar } from "../Functions/ApiRequests/Return"
import { addNewUser, getUsers } from "../Functions/ApiRequests/User"
import { getUserTypes } from "../Functions/ApiRequests/UserType"

//#region user

    export const setUsers = () => async (dis) => {
        try {
            const response = await getUsers()
            dis({ type: 'SET_USERS', payload: response.data })
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    export const setUserTypes = () => async (dis) => {
        try {
            const response = await getUserTypes()
            dis({ type: 'SET_USER_TYPES', payload: response.data })
        } catch (error) {
            console.error("Error fetching user types:", error);
        }
    }

    export const addUser = (user) => async (dis) => {
        try {
            const response = await addNewUser(user)
            dis({ type: 'SET_USERS', payload: response.data })
        } catch (error) {
            console.error("Error post user:", error);
        }

    }

    export const setCurrentUser = (user) => {
        return { type: 'SET_CURRENT_USER', payload: user }
    }

//#endregion

//#region car

    export const setCars = () => async (dis) => {
        try {
            const response = await getCars()
            dis({ type: 'SET_CARS', payload: response.data })
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    }

    export const addCar = (car) => async (dis) => {
        dis({ type: 'ADD_CAR', payload: { car, dis } })
    }

    export const updateCar = (id, car) => async (dis) => {
        dis({ type: 'UPDATE_CAR', payload: { id, car, dis } })
    }

    export const updateCarAvailable = (id) => async (dis) => {
        dis({ type: 'UPDATE_CAR_AVAILABLE', payload: { id, dis } })
    }

    export const removeCar = (id) => async (dis) => {
        dis({ type: 'REMOVE_CAR', payload: { id, dis } })
    }

//#endregion

//#region Rental

    export const setRentals = () => async (dis) => {
        try {
            const response = await getRentals()
            dis({ type: 'SET_RENTALS', payload: response.data })
        } catch (error) {
            console.error("Error fetching rentals:", error);
        }
    }

    export const addRental = (rental, street, city) => async (dis) => {
        dis({ type: 'ADD_RENTAL', payload: { rental, street, city, dis } })
    }

    export const updateReturn = (id) => async (dis) => {
        dis({ type: 'UPDATE_RETURN', payload: { id, dis } })
    }

//#endregion

//#region return

    export const addReturn = (ret) => async (dis) => {
        try {
            const response = await addReturnCar(ret)
            dis({ type: 'SET_RETURNS', payload: response.data })
        } catch (error) {
            console.error("Error fetching returns:", error);
        }
    }

//#endregion

//#region drive type

    export const setDriveTypes = () => async (dis) => {
        try {
            const response = await getDriveTypes()
            dis({ type: 'SET_DRIVE_TYPES', payload: response.data })
        } catch (error) {
            console.error("Error fetching drive types:", error);
        }
    }

    export const addDriveType = (driveType) => async (dis) => {
        dis({ type: 'ADD_DRIVE_TYPE', payload: { driveType, dis } })
    }

    export const removeDriveType = (id) => async (dis) => {
        dis({ type: 'REMOVE_DRIVE_TYPE', payload: { id, dis } })
    }

    export const updateDriveTypePrice = (id, newPrice) => async (dis) => {
        dis({ type: 'UPDATE_DRIVE_TYPE_PRICE', payload: { id, newPrice, dis } })
    }

//#endregion

//#region model

    export const setCarModels = () => async (dis) => {
        try {
            const response = await getCarModels()
            dis({ type: 'SET_CAR_MODEL', payload: response.data })
        } catch (error) {
            console.error("Error fetching car models:", error);
        }
    }

    export const addModel = (model) => async (dis) => {
        dis({ type: 'ADD_MODEL', payload: { model, dis } })
    }

//#endregion

//#region car types

    export const setCarTypes = () => async (dis) => {
        try {
            const response = await getCarTypes()
            dis({ type: 'SET_CAR_TYPES', payload: response.data })
        } catch (error) {
            console.error("Error fetching car types:", error);
        }
    }

//#endregion