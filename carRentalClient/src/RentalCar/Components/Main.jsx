import { BrowserRouter } from "react-router-dom"
import { Routing } from "./Routing"
import './style.css'
import { useEffect } from "react"
import { Provider } from "react-redux"
import Store from "../redux/Store"

export const Main = () => {

    useEffect(() => {

        if (!sessionStorage.getItem("isFirstLogin")) {
            sessionStorage.setItem("currentUser", JSON.stringify(null))
            sessionStorage.setItem("isFirstLogin", true)
        }

    }, [])

    return <>
        <Provider store={Store}>
            <BrowserRouter>
                <Routing></Routing>
            </BrowserRouter>
        </Provider>
    </>
}