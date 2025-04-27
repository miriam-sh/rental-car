import { produce } from 'immer';
import { Data } from './Data';
import { postCarModels } from '../Functions/ApiRequests/CarModel';
import { setCarModels, setCars, setDriveTypes, setRentals, updateCarAvailable } from './Actions';
import { postDriveTypes, putDriveType, removeDriveType } from '../Functions/ApiRequests/DriveTypes';
import { postRentals, putRentalsReturned } from '../Functions/ApiRequests/Rentals';
import { postCars, putCars, putCarsAvailable, removeCars } from '../Functions/ApiRequests/Cars';
import Swal from 'sweetalert2';

export const Reducer = produce((state, action) => {

    switch (action.type) {

        //#region user
        case 'SET_USERS':
            state.Users = action.payload
            break;
        case 'SET_USER_TYPES':
            state.UserTypes = action.payload
            break;
        case 'SET_CURRENT_USER':
            state.CurrentUser = action.payload
            sessionStorage.setItem("currentUser", JSON.stringify(action.payload))
            break;

        //#endregion

        //#region car
        case 'SET_CARS':
            state.Cars = action.payload
            break;
        case 'ADD_CAR':
            postCars(action.payload.car)
                .then(x => {
                    action.payload.dis(setCars(x.data))
                    Swal.fire({
                        icon: "success",
                        text: "הרכב נוצר בהצלחה!",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        text: "חלה שגיאה בעדכון הנתונים, אנא דווחו למנהל המערכת",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
            break;
        case 'UPDATE_CAR':
            putCars(parseInt(action.payload.id), action.payload.car)
                .then(x => {
                    action.payload.dis(setCars(x.data))
                    Swal.fire({
                        icon: "success",
                        text: "הרכב התעדכן בהצלחה!",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        text: "חלה שגיאה בעדכון הנתונים, אנא דווחו למנהל המערכת",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
            break;
        case 'UPDATE_CAR_AVAILABLE':
            putCarsAvailable(parseInt(action.payload.id))
                .then(x => {
                    action.payload.dis(setCars(x.data))
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        text: "חלה שגיאה בעדכון הנתונים, אנא דווחו למנהל המערכת",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
            break;
        case 'REMOVE_CAR':
            removeCars(parseInt(action.payload.id))
                .then(x => {
                    action.payload.dis(setCars(x.data))
                    Swal.fire({
                        icon: "success",
                        text: "הרכב נמחק!",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        text: "חלה שגיאה בעדכון הנתונים, אנא דווחו למנהל המערכת",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
            break;

        //#endregion

        //#region Rental
        case 'SET_RENTALS':
            state.Rentals = action.payload
            break;
        case 'ADD_RENTAL':
            postRentals(action.payload.rental)
                .then(x => {
                    action.payload.dis(setRentals(x.data))
                    action.payload.dis(updateCarAvailable(action.payload.rental.carId, action.payload.dis))
                    Swal.fire({
                        title: "ההזמנה נקלטה בהצלחה",
                        html:
                            `
                                <p>הרכב מחכה לך בכתובת: `+ action.payload.street + " " + action.payload.city + `</p>
                                <p>מספר הזמנה: `+ x.data[x.data.length - 1].id + `</p>
                            `,
                        icon: "success",
                        timer: 20000,
                        position: "center",
                        timerProgressBar: true,
                    })
                })
                .catch(error => {
                    if (error.status == 462) {
                        Swal.fire({
                            icon: "error",
                            text: "הרכב המבוקש נתפס, בחר רכב אחר",
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }
                    else
                        Swal.fire({
                            icon: "error",
                            text: "חלה שגיאה בעדכון הנתונים, אנא דווחו למנהל המערכת",
                            showConfirmButton: false,
                            timer: 2000
                        })
                })
            break;
        //#endregion

        //#region return
        case 'SET_RETURNS':
            state.Returns = action.payload
            break;
        case 'UPDATE_RETURN':
            putRentalsReturned(parseInt(action.payload.id))
                .then(x => {
                    action.payload.dis(setRentals(x.data))
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        text: "חלה שגיאה בעדכון הנתונים, אנא דווחו למנהל המערכת",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
            break;
        //#endregion

        //#region drive type
        case 'SET_DRIVE_TYPES':
            state.DriveTypes = action.payload
            break;
        case 'ADD_DRIVE_TYPE':
            postDriveTypes(action.payload.driveType)
                .then(x => {
                    action.payload.dis(setDriveTypes(x.data))
                    Swal.fire({
                        icon: "success",
                        text: "סוג ההנעה נוצר!",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        text: "חלה שגיאה בעדכון הנתונים, אנא דווחו למנהל המערכת",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
            break;
        case 'UPDATE_DRIVE_TYPE_PRICE':
            putDriveType(action.payload.id, action.payload.newPrice)
                .then(x => {
                    action.payload.dis(setDriveTypes(x.data))
                    Swal.fire({
                        icon: "success",
                        text: "השינויים נשמרו!",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        text: "חלה שגיאה בעדכון הנתונים, אנא דווחו למנהל המערכת",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
            break;
        case 'REMOVE_DRIVE_TYPE':
            removeDriveType(action.payload.id)
                .then(x => {
                    action.payload.dis(setDriveTypes(x.data))
                    Swal.fire({
                        icon: "success",
                        text: "סוג ההנעה נמחק!",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        text: "חלה שגיאה בעדכון הנתונים, אנא דווחו למנהל המערכת",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
            break
        //#endregion

        //#region model
        case 'SET_CAR_MODEL':
            state.CarModels = action.payload
            break;
        case 'ADD_MODEL':
            postCarModels(action.payload.model)
                .then(x => {
                    action.payload.dis(setCarModels(x.data))
                    Swal.fire({
                        icon: "success",
                        text: "הדגם נוסף בהצלחה!",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
                .catch(error => {
                    alert()
                    Swal.fire({
                        icon: "error",
                        text: "חלה שגיאה בעדכון הנתונים, אנא דווחו למנהל המערכת",
                        showConfirmButton: false,
                        timer: 2000
                    })
                })

            break;
        //#endregion

        //#region car types
        case 'SET_CAR_TYPES':
            state.CarTypes = action.payload
            break;
        //#endregion

        default:
            break;
    }

}, Data)