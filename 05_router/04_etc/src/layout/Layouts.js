import { Outlet } from "react-router-dom"
import Navbar from "../components/Nevbar"
import Header from "../components/Header"

const Layout = () => {
    return(
        <>
        <Header/>
        <Navbar/>
        <Outlet/>
        </>
    )
}
export default Layout;