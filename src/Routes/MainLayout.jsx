
import {Outlet} from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import "../Components/Home.css";
const MainLayout = () => {
    return (
        <>
        <div className="main">
            <Navigation/>
            <Outlet/>
        </div>
        <Footer/>
        </>
    )
}

export default MainLayout
