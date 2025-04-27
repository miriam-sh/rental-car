import { useState } from "react"
import { InputWithValidate } from "./inputs/InputWithValidate"
import LoginIcon from '@mui/icons-material/Login';

export const CreditCard = () => {

    const creditNumberCondition = [{ func: (value) => !/^\d{16}$/.test(value), messege: "invalid credit number" }]
    const validitiCondition = [{ func: (value) => !/^((0[1-9])|(1[0-2]))-\d{2}$/.test(value), messege: "invalid validiti" }]
    const cvvCondition = [{ func: (value) => !/^\d{3}$/.test(value), messege: "invalid cvv" }]

    return <>

        <InputWithValidate className="inputTextField" id="creditNumberInput" label="credit number" conditions={creditNumberCondition} required={true}></InputWithValidate>
        <InputWithValidate className="inputTextField" id="validityInput" label="validity" conditions={validitiCondition} required={true}></InputWithValidate>
        <InputWithValidate className="inputTextField" id="cvvInput" type="password" label="cvv" conditions={cvvCondition} required={true}></InputWithValidate>
        <Button startIcon={<LoginIcon></LoginIcon>} className="inputTextField" id="submitInput" type="submit" variant="outlined">sign in</Button>

    </>
}