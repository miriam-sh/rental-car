import { Outlet } from "react-router";
import { Header } from "./Header";

export const UserZone = () => {

    return <div className="flex-column">
        <Header></Header>
        <Outlet></Outlet>
    </div>
}