import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setCurrentUser, setUsers, setUserTypes } from "../redux/Actions"
import { InputIdentity } from "./inputs/InputIdentity"
import { InputPassword } from "./inputs/InputPassword"
import { InputPhone } from "./inputs/InputPhone"
import { useEffect, useState } from "react"
import LoginIcon from '@mui/icons-material/Login';

export const Login = () => {

    sessionStorage.setItem("currentUser", JSON.stringify(null))

    let users = useSelector(x => x.Users)

    let userTypes = useSelector(x => x.UserTypes)

    let dis = useDispatch()

    dis(setCurrentUser(""))

    let nav = useNavigate()

    const [identityErrorMessege, setIdentityErrorMessege] = useState()
    const [passwordErrorMessege, setPasswordErrorMessege] = useState()
    const [phoneErrorMessege, setPhoneErrorMessege] = useState()

    useEffect(() => {
        if(users.length==0)
            dis(setUserTypes())
        if(userTypes.length==0)
            dis(setUsers())
        dis(setUsers())
    }, []);

    const login = (e) => {
        e.preventDefault()

        //כל תגית מורכבת משתי תגיות ולכן הקפיצות הם בשתיים ולא באחד text fieldבגלל שהשתמשנו ב

        let user = users.find(u => u.tz == e.target[0].value)

        if (user) {
            if (user.password != e.target[2].value)
                setPasswordErrorMessege("סיסמא שגויה")
            else if (user.phone != e.target[4].value.replaceAll("-", "") && e.target[4].value != '')
                setPhoneErrorMessege("טלפון שגוי")
            else {
                dis(setCurrentUser(user))
                let userType = userTypes.find(t => t.id == user.userTypeId)
                if (userType.description == 'user')
                    nav("/UserZone/Cars")
                else
                    nav('/managerZone/Options')
            }
        }
        else
            setIdentityErrorMessege("משתמש לא נמצא, נסה ליצור משתמש חדש")

    }

    return <div className="flex-column" id="login">
        {/*  style={{direction: "rtl", textAlign: "right"}} className="formInput" */}
        <form dir="rtl" className="form" onSubmit={(e) => login(e)}>
            <InputIdentity className="inputTextField" id="tzInput" label="מספר זהות" errorMessege={identityErrorMessege} onBlur={(e) => { setIdentityErrorMessege("") }}></InputIdentity>
            <InputPassword className="inputTextField" id="passwordInput" type="password" label="סיסמה" errorMessege={passwordErrorMessege} onBlur={(e) => { setPasswordErrorMessege("") }}></InputPassword>
            <InputPhone className="inputTextField" id="phoneInput" type="tel" label="טלפון" errorMessege={phoneErrorMessege} onBlur={(e) => { setPhoneErrorMessege("") }}></InputPhone>
            <Button startIcon={<LoginIcon></LoginIcon>} className="inputTextField" id="submitInput" type="submit" variant="outlined">כניסה</Button>
        </form>
        <br></br>
        <div className="flex-row" id="link-reg">
            <label>עוד אין לכם חשבון? </label>
            <Link to={'/LoginOrRegister/Register'}>הרשמו</Link>
        </div>
    </div>
}