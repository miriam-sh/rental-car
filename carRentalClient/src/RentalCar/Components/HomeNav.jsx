import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { setUserTypes } from "../redux/Actions"
import { useEffect } from "react"

export const HomeNav = () => {

    const user = useSelector(x => x.CurrentUser)
    const userTypes = useSelector(x => x.UserTypes)
    let userType = user && userTypes.length > 0 ? userTypes.find(t => t.id == user.userTypeId).description : ''
    
    let dis = useDispatch()

    useEffect(() => {
        dis(setUserTypes())
    }, []);

    return <nav className="homeNav">
        <img className="logo" src={`${process.env.PUBLIC_URL}/images/cars/logo-shaddow-s.png`}></img>
        <div className="links">
            <NavLink></NavLink>
            <NavLink to={"/LoginOrRegister/Login"}>התחברות/הרשמה</NavLink>
            {userType.description ? <NavLink to={"/userZone/Cars"}>לצפייה ברכבים שלנו</NavLink>
            :<NavLink to={"/managerZone/Cars"}>לצפייה ברכבים שלנו</NavLink>}
        </div>
    </nav>
}