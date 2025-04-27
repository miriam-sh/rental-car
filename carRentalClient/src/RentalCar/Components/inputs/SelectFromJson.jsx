
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react"

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const SelectFromJson = ({ label = "", values, setValueToSave = () => { }, callReach, callSave, defaultValue = null, required = false }) => {

    const [valueInput, setValueInput] = useState(defaultValue)

    const changeValue = (event) => {
        setValueInput(event.target.value)
        setValueToSave(callSave(event.target.value))
    }   

    return <>
        <Box sx={{ minWidth: 140 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    // id="demo-simple-select"
                    // value={valueInput}
                    label={label}
                    defaultValue={defaultValue}
                    onChange={(e) => changeValue(e)}
                    required={required}
                    MenuProps={MenuProps}
                >
                    {values.map((x) => <MenuItem value={x}>{callReach(x)}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    </>

}