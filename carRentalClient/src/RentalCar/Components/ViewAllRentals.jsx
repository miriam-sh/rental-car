import { useDispatch, useSelector } from "react-redux"
import { RentalDetails } from "./RentalDetails"
import { setRentals } from "../redux/Actions"
import { useEffect } from "react"

export const ViewAllRentals = () => {

    const rentals = useSelector(x => x.Rentals)

    let dis = useDispatch()
    useEffect(() => {
        dis(setRentals())
    }, []);

    return <div className="allRentals">
        {rentals.map((r, i) => <div key={i} className="rentalDetails"><RentalDetails rental={r} manager={true}></RentalDetails></div>)}
    </div>
}