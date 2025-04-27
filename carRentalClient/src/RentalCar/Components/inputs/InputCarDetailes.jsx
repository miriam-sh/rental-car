import { InputWithValidate } from "./InputWithValidate"
import { useEffect, useState } from "react";
import "../style.css"
import { BasicSelect } from "./BasicSelect";
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { SelectFromJson } from "./SelectFromJson";
import { FormmatLicensePlate } from "../../Functions/FormmatLicensePlate";
import { useNavigate } from "react-router";
import { setCarModels, setDriveTypes } from "../../redux/Actions";

export const InputCarDetailes = ({
    licensePlate = null,
    company = null,
    model = null,
    numberOfSeats = null,
    yearBook = null,
    automaticGear = false,
    driveTypeId = null,
    pricePerHour = null,
    fuelConsumptionPerKm = null,
    balance = null,
    city = null,
    street = null,
    saveFunc,
    navigate
}) => {

    let nav = useNavigate()

    let carModels = useSelector(x => x.CarModels)
    let driveTypes = useSelector(x => x.DriveTypes)
    let driveType = driveTypes.length > 0 ? driveTypes.find(t => t.id == driveTypeId) : ""

    let carsDictionary = {}
    carModels.forEach(element => {
        if (!carsDictionary[element.company])
            carsDictionary[element.company] = [element.model]
        else
            carsDictionary[element.company].push(element.model)
    });

    const [Models, SetModels] = useState([])
    const [Company, SetCompany] = useState(company)
    const [DriveType, setDriveType] = useState(driveTypeId)

    let dis = useDispatch()

    useEffect(() => {

        dis(setCarModels())
        dis(setDriveTypes())

        if (!Company) {
            SetModels([])
            return
        }
        SetModels(carsDictionary[Company])

    }, [Company])

    let licensePlateConditions = [
        { func: (value) => !(/^\d{7,8}$/.test(value) || value == ""), messege: "מספר רישוי לא תקין" }
    ]

    let yearBookConditions = [
        { func: (value) => !(/^\d*$/.test(value) || value == ""), messege: "הכנס מספרים בלבד" },
        { func: (value) => !(value == "" || parseInt(value) <= new Date().getFullYear()), messege: "לא ניתן להכניס שנתון שיחול בעתיד" }
    ]

    let save = (e) => {
        
        e.preventDefault()

        let car = {
            licensePlate: FormmatLicensePlate(e.target[0].value),
            carModelId: parseInt(carModels.find(m => m.company == e.target[2].value && m.model == e.target[4].value).id),
            numberOfSeats: parseInt(e.target[6].value),
            yearBook: parseInt(e.target[8].value),
            automaticGear: e.target[10].checked,
            driveTypeId: parseInt(DriveType),
            pricePerHour: parseInt(e.target[13].value),
            fuelConsumptionPerKm: parseInt(e.target[15].value),
            balance: parseInt(e.target[17].value),
            city: e.target[19].value,
            street: e.target[21].value,
            available: true
        }

        saveFunc(car)

        nav(navigate)
    }

    return <>
        <form onSubmit={(e) => save(e)}>
            <InputWithValidate conditions={licensePlateConditions} required label="מספר רישוי" value={licensePlate}></InputWithValidate>
            <BasicSelect required label={"חברה"} values={Object.keys(carsDictionary)} setValueToSave={SetCompany} value={company} ></BasicSelect>
            <BasicSelect required disable={!Company} label={"דגם"} values={Models} value={model}></BasicSelect>
            <TextField type="number" required label="מספר מקומות" defaultValue={numberOfSeats}></TextField>
            <InputWithValidate conditions={yearBookConditions} required label="שנתון" value={yearBook}></InputWithValidate>
            <FormControlLabel id="checkUpdate" control={<Checkbox defaultChecked={automaticGear} />} label={"תיבת הילוכים אוטומטית"}></FormControlLabel>
            <SelectFromJson label={"סוג הנעה"} values={driveTypes} callReach={(x) => x ? x.description : ""} callSave={(x) => x ? x.id : ""} setValueToSave={setDriveType} defaultValue={driveType}></SelectFromJson>
            <TextField type="number" required label="מחיר לשעה" defaultValue={pricePerHour}></TextField>
            <TextField type="number" required label="צריכה לקילומטר" defaultValue={fuelConsumptionPerKm}></TextField>
            <TextField type="number" required label="יתרה בליטרים" defaultValue={balance}></TextField>
            <TextField required label="עיר" defaultValue={city}></TextField>
            <TextField required label="רחוב" defaultValue={street}></TextField>
            <Button id="buttonUpdate" className="button" type="submit" variant="contained">אישור</Button>
        </form>
    </>

}