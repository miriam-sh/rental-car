import CarRentalIcon from '@mui/icons-material/CarRental';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import { Outlet, useNavigate } from 'react-router';

export const Options = () => {

    const nav = useNavigate()

    return <div className='options'>
        <div className="option" onClick={() => nav('/managerZone/ViewAllRentals')}>
            <div>
                <CarRentalIcon sx={{ fontSize: 100, color: "white" }}></CarRentalIcon>
                <label>לצפייה בהשכרות</label>
            </div>
        </div>

        <div className="option" onClick={() => nav('/managerZone/Cars')}>
            <div>
                <DirectionsCarIcon sx={{ fontSize: 100, color: "white" }}></DirectionsCarIcon>
                <label>לצפייה ברכבים</label>
            </div>
        </div>

        <div className="option">
            <div onClick={() => nav('driveTypes')}>
                <LocalGasStationIcon sx={{ fontSize: 100, color: "white" }}></LocalGasStationIcon>
                <label>עדכון מחיר הדלק</label>
            </div>
        </div>

        <div className="option">
            <div onClick={() => nav('addCar')}>
                <AddCircleOutlineIcon sx={{ fontSize: 100, color: "white" }}></AddCircleOutlineIcon>
                <label>הוספת רכב</label>
            </div>
        </div>

        <div className="option">
            <div onClick={() => nav('addModel')}>
                <PlaylistAddCircleIcon sx={{ fontSize: 100, color: "white" }}></PlaylistAddCircleIcon>
                <label>הוספת דגם</label>
            </div>
        </div>

        <Outlet></Outlet>
    </div >

}