import { Button, IconButton } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { removeCar } from "../redux/Actions";
import { useState } from "react";
import { CarDetails } from "./CarDetails";
import { AddRental } from "./AddRental";
import Swal from "sweetalert2";

export const Car = (props) => {

    const { id, licensePlate, carModelId, numberOfSeats, yearBook, AutomaticGear, driveTypeId, pricePerHour, fuelConsumptionPerKm, balance, city, street, available } = props.car
    const carModels = useSelector(x => x.CarModels)
    const carModel = carModels.length > 0 ? carModels.find(m => m.id == carModelId) : ""
    const user = useSelector(x => x.CurrentUser)
    const [showDet, setShowDet] = useState(false)
    const [showRental, setShowRental] = useState(false)
    const userTypes = useSelector(x => x.UserTypes)
    const isManager = user && userTypes.length > 0 && user.userTypeId == userTypes.find(ut => ut.description == "manager").id
    const nav = useNavigate()
    const dis = useDispatch()

    const remove = () => {
        if (available)
            Swal.fire({
                title: "האם אתה בטוח שאתה רוצה למחוק את הרכב?",
                showDenyButton: true,
                confirmButtonText: "אישור",
                denyButtonText: `ביטול`
            }).then((result) => {
                if (result.isConfirmed)
                    dis(removeCar(id))
            });
        else
            Swal.fire({
                icon: "error",
                text: "לא ניתן למחוק רכב מושאל",
                showConfirmButton: false,
                timer: 2000
            })

    }

    const edit = () => {
        if (available)
            nav(`updateCar/${id}`)
        else
            Swal.fire({
                icon: "error",
                text: "לא ניתן לערוך רכב מושאל",
                showConfirmButton: false,
                timer: 2000
            })
    }

    return <div className="car">
        <div className="headerCar">
            <div className="available" style={{ backgroundColor: available ? "green" : "red" }}>{available ? "פנוי" : "תפוס"}</div>
            {isManager && <div className="managerOptions">
                <IconButton className="roundButton" onClick={edit} aria-label="delete"><EditIcon /></IconButton>
                <IconButton className="roundButton" onClick={remove} aria-label="delete"><DeleteIcon /></IconButton>
            </div>}
        </div>
        <img src={carModel.img.indexOf("htt") == -1 ? `${process.env.PUBLIC_URL}/images/cars/${carModel.img}` : carModel.img} alt={carModel.img} onClick={() => { setShowDet(true) }}></img>
        {showDet && <CarDetails id={id} setShow={setShowDet} setRental={setShowRental}></CarDetails>}
        <p>{carModel.company} {carModel.model}</p>
        <label>{numberOfSeats} מושבים</label>
        <div>
            <LocationOnIcon></LocationOnIcon>
            <label>{city}</label><br></br>
        </div>
        <Button onClick={() => setShowRental(true)} className="button" variant="contained" disabled={!available} > להשכרה </Button>
        {showRental && <AddRental id={id} setShow={setShowRental}></AddRental>}

    </div>
}