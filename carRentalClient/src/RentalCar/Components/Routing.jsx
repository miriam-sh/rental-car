import { Route, Routes } from "react-router"
import { Login } from "./Login"
import { UserZone } from "./UserZone"
import { ManagerZone } from "./ManagerZone"
import { Home } from "./Home"
import { Register } from "./Register"
import { CarDetails } from "./CarDetails"
import { UpdateCar } from "./UpdateCar"
import { Cars } from "./Cars"
import { Return } from "./Return"
import { LoginOrRegister } from "./LoginOrRegister"
import { Options } from "./Options"
import { ViewAllRentals } from "./ViewAllRentals"
import { AddCar } from "./AddCar"
import { AddModel } from "./AddModel"
import { DriveTypes } from "./DriveTypes"

export const Routing = () => {

    return <>
        <Routes>
            <Route path="" element={<Home></Home>}></Route>
            <Route path="Home" element={<Home></Home>}></Route>
            <Route path="LoginOrRegister" element={<LoginOrRegister></LoginOrRegister>}>
                <Route path="Register" element={<Register></Register>}></Route>
                <Route path="Login" element={<Login></Login>}></Route>
            </Route>
            <Route path="UserZone" element={<UserZone></UserZone>}>
                <Route path="Cars" element={<Cars></Cars>}></Route>
                <Route path="Return" element={<Return></Return>}></Route>
            </Route>
            <Route path="ManagerZone" element={<ManagerZone></ManagerZone>}>
                <Route path="ViewAllRentals" element={<ViewAllRentals></ViewAllRentals>}></Route>
                <Route path="Options" element={<Options></Options>}>
                    <Route path='addCar' element={<AddCar></AddCar>}></Route>
                    <Route path='addModel' element={<AddModel></AddModel>}></Route>
                    <Route path='driveTypes' element={<DriveTypes></DriveTypes>}></Route>
                </Route>
                <Route path="Cars" element={<Cars></Cars>}>
                    <Route path='UpdateCar/:id' element={<UpdateCar></UpdateCar>}></Route>
                </Route>
            </Route>
            <Route path='CarDetails/:id' element={<CarDetails></CarDetails>}></Route>
            <Route path="Cars" element={<Cars></Cars>}></Route>
        </Routes>
    </>
}