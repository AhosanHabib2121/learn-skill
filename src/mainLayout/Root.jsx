import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";

const Root = () => {
    return (
        <div>
            {/* header part here */}
            <Navbar />
            {/* outlet part here */}
            <Outlet />
            
            
           
        </div>
    );
};

export default Root;