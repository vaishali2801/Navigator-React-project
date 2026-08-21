
import {Outlet} from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
const MainLayout = () => {
    return (
        <>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default MainLayout
