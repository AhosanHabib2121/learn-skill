import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import { useState } from "react";

const Root = () => {
    const [changeMode, setChangeMode] = useState(false);

    return (
        <div data-theme={changeMode? 'dark': 'light'}>
            {/* header part here */}
            <Navbar
                setChangeMode={setChangeMode}
                changeMode = {changeMode}
            />
            {/* outlet part here */}
            <Outlet />
            
            
           
        </div>
    );
};

export default Root;