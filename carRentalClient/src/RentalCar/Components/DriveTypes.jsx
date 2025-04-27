import { useDispatch, useSelector } from "react-redux"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router";
import { DriveType } from "./DriveType";
import { useEffect, useState } from "react";
import { setDriveTypes } from "../redux/Actions";


export const DriveTypes = () => {

    const driveTypes = useSelector(x => x.DriveTypes)
    const [add, setAdd] = useState(false)
    const nav = useNavigate()
    const dis = useDispatch()

    useEffect(() => {
        dis(setDriveTypes())
    }, []);

    return <>

        <Dialog open={true}
            id="DialogDriveTypes"
        >
            <DialogTitle id="closeDialog">
                <IconButton className="roundButton" onClick={() => nav("../")} ><CloseIcon /></IconButton>
                <DialogContentText id="carDetailes">סוגי הנעה: </DialogContentText>
            </DialogTitle>
            <DialogContent id="DialogTypes">
                <TableContainer id="driveTypesTable" component={Paper} >
                    <Table sx={{ minWidth: 500 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">סוג הנעה</TableCell>
                                <TableCell align="center">מחיר לשעה</TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {driveTypes.map((t) => (<DriveType description={t.description} id={t.id} pricePerLiter={t.pricePerLiter}></DriveType>))}
                            {add && <DriveType stateType="new" setAdd={setAdd}></DriveType>}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
            <DialogActions id='dialogFunctions'>
                <div className='DialogActions'>
                    <Button className="button" variant="contained" onClick={() => setAdd(true)} > להוספה </Button>
                </div>
            </DialogActions>
        </Dialog>

    </>
}
