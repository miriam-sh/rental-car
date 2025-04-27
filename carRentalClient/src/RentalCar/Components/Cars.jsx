import { useDispatch, useSelector } from "react-redux"
import { Car } from "./Car"
import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { createTheme } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Outlet } from "react-router";
import { setCarModels, setCars } from "../redux/Actions";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});


export const Cars = () => {

    const dis = useDispatch()
    const carModels = useSelector(x => x.CarModels)
    const allCars = useSelector(x => x.Cars)

    useEffect(() => {
        dis(setCarModels())
        dis(setCars())
    }, []);

    let carsDictionary = {}
    carModels.forEach(element => {
        if (!carsDictionary[element.company])
            carsDictionary[element.company] = [element.model]
        else
            carsDictionary[element.company].push(element.model)
    });

    let cities = []
    allCars.forEach((element) => {
        if (!cities.includes(element.city))
            cities.push(element.city)
    })

    const [carsList, setCarsList] = useState(allCars)
    const [selectedCompanies, setSelectedCompanies] = useState([])
    const [models, SetModels] = useState([])
    const [selectedModels, setSelectedModels] = useState([])
    const [numberOfSeats, setNumberOfSeats] = useState('');
    const [selectedCities, setSelectedCities] = useState([]);
    const [available, setAvailable] = useState(false);

    const selectCompany = (event) => {
        const {
            target: { value } } = event;
        setSelectedCompanies(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const selectModel = (event) => {
        const {
            target: { value } } = event;
        setSelectedModels(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const selectNumberOfSeats = (event) => {
        if (event.target.value == "all")
            setNumberOfSeats('')
        else
            setNumberOfSeats(event.target.value);
    };

    const selectCity = (event) => {
        const {
            target: { value } } = event;
        setSelectedCities(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const checkAvailable = (event) => {
        setAvailable(event.target.checked);
    };

    useEffect(() => {

        if (selectedCompanies.length == 0) {
            setSelectedModels([])
            return
        }

        let temp1 = []
        selectedCompanies.forEach(company => {
            carsDictionary[company].forEach(m => temp1.push(m))
        });


        let temp2 = []
        selectedModels.forEach(model => {
            if (temp1.includes(model))
                temp2.push(model)
        });

        SetModels(temp1)
        setSelectedModels(temp2)

    }, [selectedCompanies])

    useEffect(() => {

        let cars = allCars
        cars = cars.filter((c) => {
            if (available && !c.available)
                return false
            if (numberOfSeats && numberOfSeats != c.numberOfSeats)
                return false
            if (selectedCities.length > 0 && !selectedCities.includes(c.city))
                return false

            let carModel = carModels.find((m) => m.id == c.carModelId)

            if (selectedCompanies.length > 0 && !selectedCompanies.includes(carModel.company))
                return false

            let b = false
            selectedModels.forEach((model) => {
                if (carsDictionary[carModel.company].includes(model))
                    b = true
            })

            return !b || selectedModels.includes(carModel.model)

        })
        setCarsList(cars)

    }, [allCars, selectedCompanies, selectedModels, numberOfSeats, selectedCities, available])

    return <div id="carsPage">

        <img className="backImg" src={`${process.env.PUBLIC_URL}/images/cars/background1.png`}></img>

        <div className="filter">
            <div className="filterOptions">
                <div className="select" id="companies">
                    <FormControl sx={{ width: 200 }}>
                        <InputLabel id="demo-multiple-checkbox-label">חברה</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={selectedCompanies}
                            onChange={selectCompany}
                            input={<OutlinedInput label="חברה" />}
                            renderValue={(selected) => selected.join(',')}
                            MenuProps={MenuProps}
                        >
                            {Object.keys(carsDictionary).map((company) => (
                                <MenuItem key={company} value={company}>
                                    <Checkbox checked={selectedCompanies.includes(company)} />
                                    <ListItemText primary={company} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>


                <div className="select" id="models">
                    <FormControl sx={{ width: 200 }} disabled={selectedCompanies.length == 0}>
                        <InputLabel id="demo-multiple-checkbox-label">דגם</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={selectedModels}
                            onChange={selectModel}
                            input={<OutlinedInput label="דגם" />}
                            renderValue={(selected) => selected.join(',')}
                            MenuProps={MenuProps}
                        >
                            {models.map((model) => (
                                <MenuItem key={model} value={model}>
                                    <Checkbox checked={selectedModels.includes(model)} />
                                    <ListItemText primary={model} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <Box className="select" id="numbersOfSeats" sx={{ minWidth: 140 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">מספר מקומות</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={numberOfSeats}
                            label="מספר מקומות"
                            onChange={selectNumberOfSeats}
                        >
                            <MenuItem value={"all"}>{'הכל'}</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <div className="select" id="cities">
                    <FormControl sx={{ width: 200 }}>
                        <InputLabel id="demo-multiple-checkbox-label">עיר</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={selectedCities}
                            onChange={selectCity}
                            input={<OutlinedInput label="עיר" />}
                            renderValue={(selected) => selected.join(',')}
                            MenuProps={MenuProps}
                        >
                            {cities.map((city) => (
                                <MenuItem key={city} value={city}>
                                    <Checkbox checked={selectedCities.includes(city)} />
                                    <ListItemText primary={city} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <FormControlLabel control={
                    <Checkbox label="פנוי"
                        checked={available}
                        onChange={checkAvailable}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />}
                    label="פנוי"
                />

            </div>
        </div>

        <div className="cars">
            {carsList.map((c, i) => <Car key={i} car={c}></Car>)}
        </div>
        <Outlet></Outlet>
    </div>
}