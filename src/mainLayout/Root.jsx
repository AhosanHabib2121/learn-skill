import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Banner from "../components/header/Banner";
import Footer from "../components/footer/Footer";

const Root = () => {
    return (
        <div>
            {/* header part here */}
            <Navbar />
            <Banner/>
            {/* outlet part here */}
            <Outlet />
            {/* footer part here */}
            <Footer/>
        </div>
    );
};

export default Root;