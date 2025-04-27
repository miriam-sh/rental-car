import { IconButton, TableCell, TableRow, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { addDriveType, removeDriveType, setCars, updateDriveTypePrice } from "../redux/Actions";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export const DriveType = ({ id = "", description = "", pricePerLiter = "", stateType = "reach", setAdd = () => { } }) => {

    const dis = useDispatch()
    const cars = useSelector(x => x.Cars)
    //reach, edit, new :קיימים 3 סוגי מצבים
    const [state, setState] = useState(stateType)

    useEffect(() => {
            dis(setCars())
    }, []);

    let edit = () => {
        setState("edit")
    }

    let save = () =>{

        dis(updateDriveTypePrice(parseInt(id), pricePerLiter))
        setState("reach")
        
    }

    let create = () => {
        let dt = {
            id: 0,
            description: description,
            pricePerLiter: parseInt(pricePerLiter)
        }

        setAdd(false)

        dis(addDriveType(dt))

        setState("reach")

    }

    let remove = () => {
        let i
        for (i = 0; i < cars.length && cars[i].driveTypeId != id; i++);

        i == cars.length ?
            Swal.fire({
                title: "האם אתה בטוח שאתה רוצה למחוק את סוג ההנעה?",
                showDenyButton: true,
                confirmButtonText: "אישור",
                denyButtonText: `ביטול`,
            }).then((result) => {
                if (result.isConfirmed) {
                    dis(removeDriveType(id))
                }
            })
            :
            Swal.fire({
                icon: "error",
                text: "קיימים רכבים שתלויים בסוג הנעה זה!",
                showConfirmButton: false,
                timer: 2000
            })
    }

    return <>
        <TableRow
            key={description}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell component="th" scope="row" align="center">
                {state == "reach" || state == "edit" ? description
                    : <TextField onChange={(e) => { description = e.target.value }}></TextField>
                }
            </TableCell>
            <TableCell align="center">
                {state == "reach" ? pricePerLiter
                    :
                    state == "edit" ? <TextField type="number" defaultValue={pricePerLiter} onChange={(e) => { pricePerLiter = e.target.value }}></TextField>
                        : <TextField type="number" onChange={(e) => { pricePerLiter = e.target.value }}></TextField>

                }
            </TableCell>
            <TableCell align="center">
                {state == "reach" ? <IconButton className="roundButton" onClick={() => edit()} aria-label="delete"><EditIcon /></IconButton>
                    :
                    <IconButton className="roundButton" onClick={() => { state == "edit" ? save() : create() }} aria-label="delete"><CheckIcon /></IconButton>
                }
            </TableCell>
            <TableCell align="center">
                {state != "new" ? <IconButton className="roundButton" onClick={() => remove()} aria-label="delete"><DeleteIcon /></IconButton>
                    : <IconButton className="roundButton" onClick={() => setAdd(false)} aria-label="delete"><CloseIcon /></IconButton>
                }
            </TableCell>
        </TableRow>
    </>
}