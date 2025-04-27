import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RentalDetails } from "./RentalDetails"
import { addReturn, setCars, setDriveTypes, setRentals, updateCar, updateReturn } from "../redux/Actions"
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Swal from "sweetalert2";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { InputWithValidate } from "./inputs/InputWithValidate";
import { InputIdentity } from "./inputs/InputIdentity";
import { getRentalsById } from "../Functions/ApiRequests/Rentals";

export const Return = () => {

    const currentUser = useSelector(x => x.CurrentUser)
    const cars = useSelector(x => x.Cars)
    const driveTypes = useSelector(x => x.DriveTypes)
    let [userRentals, setUserRentals] = useState([])

    const [currentRental, setCurrentRental] = useState(null)
    const [city, setCity] = useState(null)
    const [street, setStreet] = useState(null)
    const [balance, setBalance] = useState(null)
    const [payment, setPayment] = useState(false)
    const [payByAnotherCard, setPayByAnotherCard] = useState(false)
    const [errors, setErrors] = useState({})
    const [identityErrorMessege, setIdentityErrorMessege] = useState()

    useEffect(() => {
        if (driveTypes.length == 0)
            dis(setDriveTypes)
        if (cars.length == 0)
            dis(setCars())
        dis(setDriveTypes())

        getRentalsById(currentUser.id)
            .then(x => {
                setUserRentals(x.data)
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    text: "חלה שגיאה בעדכון הנתונים, אנא דווחו למנהל המערכת",
                    showConfirmButton: false,
                    timer: 2000
                })
            })
    }, [userRentals])

    const rentalIdRef = useRef()

    const [payForHours, setPayForHours] = useState(0)
    const [payForFuel, setPayForFuel] = useState(0)

    const dis = useDispatch()

    const creditNumberCondition = [{ func: (value) => !/^\d{16}$/.test(value), messege: "invalid credit number" }]

    const validitiCondition = [{ func: (value) => !/^((0[1-9])|(1[0-2]))-\d{2}$/.test(value), messege: "invalid validiti" }]

    const cvvCondition = [{ func: (value) => !/^\d{3}$/.test(value), messege: "invalid cvv" }]

    const find = () => {
        if (rentalIdRef.current.value.length == 0)
            return

        let rental = userRentals.find(r => r.id == rentalIdRef.current.value)

        if (!rental) {
            setErrors({ ...errors, rentId: 'לא נמצאה השכרה לפי הקוד שהוזן.' })
            return
        }

        if (rental.returned) {
            setErrors({ ...errors, rentId: 'השכרה זו כבר הוחזרה.' })
            return
        }

        setCurrentRental(rental)
    }

    const updateErrors = (key) => {
        setErrors(`{...errors, ${key}:'' }`)
    }

    const diffInHours = (d1, d2) => {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return Math.floor((t2 - t1) / (3600 * 1000));
    }

    const returnCar = () => {

        if (!city) {
            setErrors({ ...errors, city: 'זהו שדה חובה' })
            return
        }

        if (!street) {
            setErrors({ ...errors, street: 'זהו שדה חובה' })
            return
        }

        if (!balance) {
            setErrors({ ...errors, balance: 'זהו שדה חובה' })
            return
        }

        let car = cars.find(c => c.id == currentRental.carId);

        let rentalDate = new Date(currentRental.dateAndTime)

        let now = new Date()
        let countHours = parseFloat(diffInHours(rentalDate, now))

        setPayForHours(countHours * car.pricePerHour)

        let diffBalance = car.balance - balance

        let pricePerLiter = parseInt(driveTypes.find(d => d.id == car.driveTypeId).pricePerLiter)
        setPayForFuel(diffBalance * pricePerLiter)

        setPayment(true)

    }

    const payAndReturn = () => {

        Swal.fire({
            title: "התשלום בוצע בהצלחה",
            html:
                `
                    <p>קוד האישור מחברת האשראי: ${parseInt(Math.random() * 1000000)}</p>
 
                `,
            icon: "success",
            timer: 10000,
            position: "center",
            timerProgressBar: true,
        })

        let car = cars.find(c => c.id == currentRental.carId);

        // עדכון פרטי רכב
        let updatedCar = { ...car }
        updatedCar.city = city
        updatedCar.street = street
        updatedCar.balance = balance
        updatedCar.available = true
        dis(updateCar(car.id, updatedCar))

        // עדכון החזרה
        dis(updateReturn(currentRental.id))

        // הוספת החזרה
        let newReturn = {
            rentalId: currentRental.id,
            dateAndTime: new Date(),
            balance,
            totalPayable: payForHours + payForFuel,
            paid: true
        }

        rentalIdRef.current.value = ''
        setCurrentRental(null)
        setCity(null)
        setStreet(null)
        setBalance(null)
        setPayment(false)

        dis(addReturn(newReturn))



    }

    return <div className="return flex-column">
        <div className="flex-column search">
            <div className="flex-row">
                <input className="inputSearch" type='text' placeholder="הקלד קוד השאלה או בחר השאלה" ref={rentalIdRef} onChange={() => setErrors({})} ></input>
                <button className="btnSearch" onClick={find} ><SearchIcon sx={{ color: "white" }}></SearchIcon></button><br></br>
            </div>
            <p>{errors.rentId}</p>
            {userRentals.length == 0 && <p>אין לך השכרות שלא החזרת</p>}

        </div>
        <br></br>

        {currentRental && <div className="current flex-row">
            <RentalDetails rental={currentRental}></RentalDetails>
            <div className="returnDetails">
                <TextField onChange={(event) => {
                    setCity(event.target.value)
                    updateErrors(city)
                }}
                    className="standard-basic" label="עיר" variant="standard" /><br></br>
                <p>{errors.city}</p>
                <TextField onChange={(event) => {
                    setStreet(event.target.value)
                    updateErrors(street)
                }}
                    className="standard-basic" label="רחוב" variant="standard" /><br></br>
                <p>{errors.street}</p>
                <TextField onChange={(event) => {
                    setBalance(event.target.value)
                    updateErrors(balance)
                }}
                    className="standard-basic" type="number" label="יתרת הדלק" variant="standard" /> <br></br>
                <p>{errors.balance}</p>
                <button className="btn" onClick={returnCar}>להחזרה ותשלום</button>
            </div>
        </div>}

        <Dialog open={payment} id="DialogPayment">
            <DialogTitle id="closeDialog">
                <IconButton className="roundButton" onClick={() => setPayment(false)} ><CloseIcon /></IconButton>
                <DialogContentText className="title">תשלום</DialogContentText>
            </DialogTitle>
            <DialogContent className="content" >
                <DialogContentText></DialogContentText>
                <DialogContentText>התשלום עבור משך השכרה: {payForHours}</DialogContentText>
                <DialogContentText>התשלום עבור הדלק: {payForFuel}</DialogContentText>
                <DialogContentText>סה"כ לתשלום: {payForFuel + payForHours}</DialogContentText>
                <Button className="payBtn" onClick={() => { setPayment(false); payAndReturn() }}>לתשלום בכרטיס אשראי השמור במערכת</Button>
                <Button className="payBtn" onClick={() => { setPayment(false); setPayByAnotherCard(true) }}>לתשלום בכרטיס אשראי אחר</Button>
            </DialogContent>
        </Dialog>

        <Dialog open={payByAnotherCard} id="DialogPayment">
            <DialogTitle id="closeDialog">
                <IconButton className="roundButton" onClick={() => setPayByAnotherCard(false)} ><CloseIcon /></IconButton>
                <DialogContentText className="title">תשלום</DialogContentText>
            </DialogTitle>
            <DialogContent className="content2" >
                <DialogContentText></DialogContentText>
                <DialogContentText>התשלום עבור משך השכרה: {payForHours}</DialogContentText>
                <DialogContentText>התשלום עבור הדלק: {payForFuel}</DialogContentText>
                <DialogContentText>סה"כ לתשלום: {payForFuel + payForHours}</DialogContentText>
                <div className="flex-column">
                    <InputWithValidate className="inputTextField" id="creditNumberInput" label="credit number" conditions={creditNumberCondition} required={true}></InputWithValidate>
                    <InputWithValidate className="inputTextField" id="validityInput" label="validity" conditions={validitiCondition} required={true}></InputWithValidate>
                    <InputWithValidate className="inputTextField" id="cvvInput" type="password" label="cvv" conditions={cvvCondition} required={true}></InputWithValidate>
                    <InputIdentity className="inputTextField" id="tzInput" label="identity" errorMessege={identityErrorMessege}></InputIdentity>
                </div>
                <Button className="payBtn" onClick={() => { setPayByAnotherCard(false); payAndReturn() }}>לתשלום</Button>
            </DialogContent>
        </Dialog>

        <div className="flex-row userRents">
            {userRentals && userRentals.map(r => <div className="rentalDetails" key={r.id} onClick={() => { rentalIdRef.current.value = r.id; find() }}><RentalDetails rental={r} ></RentalDetails></div>)}
        </div>

    </div>
}