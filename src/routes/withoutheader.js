import React from "react";
import { Outlet } from "react-router-dom";

const LayoutWithoutHeader = () => 
    (
        <div>
            <Outlet/>
        </div>
    )


export default LayoutWithoutHeader;