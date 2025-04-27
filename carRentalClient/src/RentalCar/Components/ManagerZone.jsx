import { Header } from "./Header"
import { Outlet } from "react-router";


export const ManagerZone = () => {

    return <div className="flex-column">
        <Header></Header>
        <Outlet></Outlet>
    </div>
}