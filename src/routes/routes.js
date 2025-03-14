import React from "react"
import { Routes, Route} from 'react-router-dom';
import Page1 from '../pages/page1.js';
import Page2 from '../pages/page2.js';
import Page3 from '../pages/page3.js';
import Page4 from "../pages/page4.js";
import Login from "../pages/login";
import LayoutWithHeader from "./withheader";
import LayoutWithoutHeader from "./withoutheader";
import Signup from "../pages/signup";

const RoutesLogic = () => {
    return (

        <Routes>
            <Route element={<LayoutWithHeader/>}>
            <Route path="/page1" element={<Page1/>}></Route>
            <Route path='/page2' element={<Page2/>}></Route>
            <Route path='/page3' element={<Page3/>}></Route>
            <Route path='/page4' element={<Page4/>}></Route>  
            </Route>
            
            <Route element={<LayoutWithoutHeader/>}>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>

            </Route>
            
        </Routes>
     
    )
}
export default RoutesLogic

