import { useDispatch, useSelector } from "react-redux"
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { setCarModels, setCars, setUsers } from "../redux/Actions";
import { useEffect } from "react";

export const RentalDetails = (props) => {

    const { id, userId, carId, dateAndTime, returned } = props.rental

    const manager = props.manager

    const cars = useSelector(x => x.Cars)

    let car = cars.length > 0 ? cars.find(c => c.id == carId) : ''

    let carModels = useSelector(x => x.CarModels)

    let carModel = carModels.length > 0 && car ? carModels.find(m => m.id == car.carModelId) : ''

    const users = useSelector(x => x.Users)

    let user = users.length > 0 ? users.find(u => u.id == userId) : ''

    const datetime = new Date(dateAndTime)

    let dis = useDispatch()

    useEffect(() => {
        dis(setCars())
        dis(setCarModels())
        dis(setUsers())
    }, []);

    return <>
        <img className="carImg" src={`${process.env.PUBLIC_URL}/images/cars/${carModel.img}`} alt={car.img}></img>
        <div className="details">
            <p>{carModel.company} {carModel.model}</p>
            <p>קוד השאלה: {id}</p>
            {manager && <p>לקוח: {user.name}</p>}
            <p>תאריך: {datetime.toLocaleDateString()}</p>
            <p>שעה: {datetime.toLocaleTimeString()}</p>
            {returned && <div className="flex-row">
                <TaskAltIcon sx={{ color: 'green' }}></TaskAltIcon>
                <label>הוחזר</label>
            </div>}
            {!returned && <div className="flex-row">
                <HighlightOffIcon sx={{ color: 'red' }}></HighlightOffIcon>
                <label>לא הוחזר</label>
            </div>}
        </div>
    </>
}