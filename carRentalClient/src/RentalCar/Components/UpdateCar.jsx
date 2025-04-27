import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router"
import { InputCarDetailes } from "./inputs/InputCarDetailes"
import { updateCar } from "../redux/Actions"
import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

export const UpdateCar = () => {

    let nav = useNavigate()
    const { id } = useParams()
    let car = useSelector(x => x.Cars).find(c => c.id == id)
    let carModel = useSelector(x => x.CarModels).find(m => m.id == car.carModelId)
    let dis = useDispatch()
    return <>
        <Dialog open={true}
        id="DialogUpdateCar"
        >
            <DialogTitle id="closeDialog">
                <IconButton className="roundButton" onClick={() => nav("../")} ><CloseIcon /></IconButton>
                <DialogContentText id="carDetailes">עדכון פרטי רכב: </DialogContentText>
            </DialogTitle>
            <DialogContent id="DialogUpdate">
                <InputCarDetailes
                    automaticGear={car.automaticGear}
                    balance={car.balance}
                    city={car.city}
                    driveTypeId={car.driveTypeId}
                    fuelConsumptionPerKm={car.fuelConsumptionPerKm}
                    licensePlate={car.licensePlate.replaceAll("-", "")}
                    numberOfSeats={car.numberOfSeats}
                    pricePerHour={car.pricePerHour}
                    street={car.street}
                    yearBook={car.yearBook}
                    company={carModel.company}
                    model={carModel.model}
                    saveFunc={car => dis(updateCar(id, car))}
                    navigate={"../"}
                >
                </InputCarDetailes>
            </DialogContent>
        </Dialog>

    </>
}