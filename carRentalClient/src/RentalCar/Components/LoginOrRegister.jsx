import { Outlet } from "react-router"
import { Link } from "react-router-dom"

export const LoginOrRegister = () => {
    return <div className='flex-row'>
        <Link to={'/Home'}>
            <img className="logo" src={`${process.env.PUBLIC_URL}/images/cars/logo-shaddow-s.png`}></img>
        </Link>
        <Outlet></Outlet>
        <div className="side">
            <img src={`${process.env.PUBLIC_URL}/images/cars/car_with_logo2.png`}></img>
        </div>
    </div>
}