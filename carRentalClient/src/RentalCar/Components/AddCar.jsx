import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { InputCarDetailes } from "./inputs/InputCarDetailes"
import { addCar } from "../redux/Actions"
import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

export const AddCar = () => {

    let nav = useNavigate()
    let dis = useDispatch()
    
    return <>
        <Dialog open={true}
            id="DialogUpdateCar"
        >
            <DialogTitle id="closeDialog">
                <IconButton className="roundButton" onClick={() => nav("../")} ><CloseIcon /></IconButton>
                <DialogContentText id="carDetailes">הוספת רכב: </DialogContentText>
            </DialogTitle>
            <DialogContent id="DialogUpdate">
                <InputCarDetailes saveFunc={car => dis(addCar(car))} navigate={"../../cars"}>
                </InputCarDetailes>
            </DialogContent>
        </Dialog>

    </>
}