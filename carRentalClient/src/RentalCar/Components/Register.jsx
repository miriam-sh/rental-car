import { Button, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { addUser, setCurrentUser, setUserTypes } from "../redux/Actions"
import { useNavigate } from "react-router"
import { InputWithValidate } from "./inputs/InputWithValidate"
import { useEffect, useState } from "react"
import { InputIdentity } from "./inputs/InputIdentity"
import { InputPassword } from "./inputs/InputPassword"
import { InputPhone } from "./inputs/InputPhone"
import LoginIcon from '@mui/icons-material/Login';

export const Register = () => {

    sessionStorage.setItem("currentUser", JSON.stringify(null))

    let users = useSelector(x => x.Users)

    let dis = useDispatch()

    dis(setCurrentUser(""))

    useEffect(() => {
        if (users.length == 0)
            dis(setUserTypes())
    }, []);

    let nav = useNavigate()

    const [identityErrorMessege, setIdentityErrorMessege] = useState()

    let creditNumberCondition = [{ func: (value) => !/^\d{16}$/.test(value), messege: "מספר כרטיס אשראי שגוי" }]

    let validitiCondition = [{ func: (value) => !/^((0[1-9])|(1[0-2]))-\d{2}$/.test(value), messege: "התוקף צריך להית מהתבנית: mm/yy" }]

    let cvvCondition = [{ func: (value) => !/^\d{3}$/.test(value), messege: "שגוי cvv" }]

    const login = (e) => {
        e.preventDefault()

        for (let i = 0; i < e.target.length - 2; i += 2) {
            e.target[i].blur()
            if (document.getElementById(e.target[i].id + "-helper-text"))
                return
        }

        for (let i = 0; i < users.length; i++)
            if (users[i].tz == e.target[0].value) {
                setIdentityErrorMessege("מספר הזהות קיים כבר במערכת")
                return
            }

        let user = {
            name: e.target[2].value != "" ? e.target[2].value : "new user",
            tz: e.target[0].value,
            phoneNumber: e.target[6].value != "" ? e.target[6].value.replaceAll("-", "") : null,
            password: e.target[4].value,
            CreditNumber: e.target[8].value,
            expirationDate: e.target[10].value,
            cvv: e.target[12].value,
            userTypeId: 2
        }
        dis(addUser(user))
        nav("/login")

    }

    return <div id="register">
            <form className="form" onSubmit={(e) => login(e)}>
                <InputIdentity className="inputTextField" id="tzInput" label="מספר זהות" errorMessege={identityErrorMessege}></InputIdentity>
                <TextField className="inputTextField" id="nameInput" label="שם משתמש"></TextField>
                <InputPassword className="inputTextField" id="passwordInput" type="password" label="סיסמא"></InputPassword>
                <InputPhone className="inputTextField" id="phoneInput" type="tel" label="טלפון"></InputPhone>
                <InputWithValidate className="inputTextField" id="creditNumberInput" label="מספר כרטיס אשראי" conditions={creditNumberCondition} required={true}></InputWithValidate>
                <InputWithValidate className="inputTextField" id="validityInput" label="תוקף" conditions={validitiCondition} required={true}></InputWithValidate>
                <InputWithValidate className="inputTextField" id="cvvInput" type="password" label="cvv" conditions={cvvCondition} required={true}></InputWithValidate>
                <Button startIcon={<LoginIcon></LoginIcon>} className="inputTextField" id="submitInput" type="submit" variant="outlined">רישום</Button>

            </form>
    </div>
}