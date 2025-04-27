import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addModel, setCarTypes } from "../redux/Actions";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from "@mui/material";
import { SelectFromJson } from "./inputs/SelectFromJson";
import CloseIcon from '@mui/icons-material/Close';

export const AddModel = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [CarType, setCarType] = useState()
    const CarTypes = useSelector(x => x.CarTypes)
    const dis = useDispatch()
    const nav = useNavigate()

    useEffect(() => {
        dis(setCarTypes())
    }, []);


    const fileChange = (event) => {
        setSelectedFile(event.target.files[0])
    };

    const send = (e) => {
        e.preventDefault();

        let model =
        {
            company: e.target[0].value,
            model: e.target[2].value,
            carTypeId: parseInt(CarType),
            img: selectedFile.name //? URL.createObjectURL(selectedFile) : "null.png"
        }

        dis(addModel(model))

        nav("../")

    };

    return <>
        <Dialog open={true}
            id="DialogAddModel"
        >
            <DialogTitle id="closeDialog">
                <IconButton className="roundButton" onClick={() => nav("../")} ><CloseIcon /></IconButton>
                <DialogContentText id="carDetailes">הוספת דגם: </DialogContentText>
            </DialogTitle>
            <DialogContent id="DialogModel">
                <form onSubmit={(e) => send(e)}>
                    <TextField label="חברה" required></TextField>
                    <TextField label="דגם" required></TextField>
                    <SelectFromJson label={"בחר סוג רכב"} values={CarTypes} callReach={(x) => x ? x.description : ""} callSave={(x) => x ? x.id : ""} setValueToSave={setCarType} required></SelectFromJson>
                    <TextField type="file" accept=".png" onChange={fileChange} id="imageInput" />
                    <Button id="buttonModel" className="button" type="submit" variant="contained">אישור</Button>
                </form>
            </DialogContent>
        </Dialog>

    </>
}


