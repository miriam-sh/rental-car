import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { setDriveTypes } from '../redux/Actions';

export const CarDetails = ({ id, setShow, setRental }) => {

    let car = useSelector(x => x.Cars).find(c => c.id == id)
    let carModel = useSelector(x => x.CarModels).find(m => m.id == car.carModelId)
    let driveTypes = useSelector(x => x.DriveTypes)
    let driveType = driveTypes.length>0 ? driveTypes.find(d => d.id == car.driveTypeId) : ""
    let dis = useDispatch()

    useEffect(()=>{
        dis(setDriveTypes())
    },[])

    return (
        <>
            <Dialog id='dialogDetailes' open={true}>
                <DialogTitle id="closeDialog">
                    <IconButton className="roundButton" onClick={() => setShow(false)} ><CloseIcon /></IconButton>
                </DialogTitle>
                <DialogContent id='dialogDiv'>
                    <br></br>
                    <div className='dialogInner'>
                        <div>
                            <DialogContentText id="carDetailes"> {carModel.company} {carModel.model} </DialogContentText>
                            <img className='picSmall' src={carModel.img.indexOf("htt") == -1 ? `${process.env.PUBLIC_URL}/images/cars/${carModel.img}` : carModel.img} alt={car.img} ></img>
                        </div>
                        <div>
                            <DialogContentText><label className='dialogValue'> מספר רישוי: </label><label className='dialogText'>{car.licensePlate} </label></DialogContentText>
                            <DialogContentText><label className='dialogValue'> מספר מושבים: </label><label className='dialogText'>{car.numberOfSeats} </label></DialogContentText>
                            <DialogContentText><label className='dialogValue'> שנתון:  </label><label className='dialogText'>{car.yearBook} </label></DialogContentText>
                            <DialogContentText><label className='dialogValue'> תיבת הילוכים  {car.automaticGear ? "אוטומטית" : "ידנית"} </label></DialogContentText>
                            <DialogContentText><label className='dialogValue'> סוג הנעה:  </label><label className='dialogText'>{driveType.description}  </label></DialogContentText>
                            <DialogContentText><label className='dialogValue'> מחיר לשעה:  </label><label className='dialogText'>{car.pricePerHour} </label></DialogContentText>
                            <DialogContentText><label className='dialogValue'> צריכה לקילומטר:  </label><label className='dialogText'>{car.fuelConsumptionPerKm} </label></DialogContentText>
                            <DialogContentText><label className='dialogValue'> יתרת ליטרים נוכחית:  </label><label className='dialogText'>{car.balance} </label></DialogContentText>
                            <DialogContentText><label className='dialogValue'> מיקום:  </label><label className='dialogText'>{car.street} {car.city} </label></DialogContentText>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions id='dialogFunctions'>
                    <div className='DialogActions'>
                        <Button onClick={() => { setShow(false); setRental(true) }} className="button" variant="contained" disabled={!car.available} > להשכרה </Button>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </DialogActions>
            </Dialog>
        </>
    );
}