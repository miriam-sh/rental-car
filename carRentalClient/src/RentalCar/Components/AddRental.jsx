import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { addRental } from "../redux/Actions"
import CloseIcon from '@mui/icons-material/Close';
import Swal from "sweetalert2"

export const AddRental = ({ id, setShow }) => {

    const car = useSelector(x => x.Cars).find(c => c.id == id)
    const user = useSelector(x => x.CurrentUser)
    const dis = useDispatch()

    const rental = (e) => {
        e.preventDefault();

        let rental =
        {
            userId: parseInt(user.id),
            carId: parseInt(id),
            dateAndTime: new Date(),
            returned: false
        }

        dis(addRental(rental, car.street, car.city))

        setShow(false)

    }

    if (user)
        return (
            <>
                <Dialog open={true}
                    id="DialogRentalMain"
                    PaperProps={{
                        component: 'form',
                        onSubmit: (e) => { rental(e) },
                    }}>
                    <DialogTitle id="closeDialog">
                        <IconButton className="roundButton" onClick={() => setShow(false)} ><CloseIcon /></IconButton>
                        <DialogContentText id="carDetailes"> פרטי השכרה: </DialogContentText>
                    </DialogTitle>
                    <DialogContent id="dialogRental" >
                        <TextField className="dialogForm" label="מספר רישוי" value={car.licensePlate} aria-readonly></TextField>
                        <TextField className="dialogForm" label="תאריך" value={new Date().toLocaleDateString()} aria-readonly></TextField>
                        <TextField className="dialogForm" label="שעה" value={new Date().toLocaleTimeString()} aria-readonly></TextField>
                        <Button id="submitRental" type="submit">אישור</Button>
                    </DialogContent>
                </Dialog>
            </>
        )
    else {
        Swal.fire({
            icon: "error",
            text: "ההשכרה למנויים בלבד"
        })
        setShow(false)
        return <></>
    }
}