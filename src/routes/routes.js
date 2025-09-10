import React from "react"
import { Routes, Route} from 'react-router-dom';
import AboutMe from '../pages/aboutMe.js';
import Skills from '../pages/skills.js';
import Projects from '../pages/projects.js';
import ContactMe from "../pages/contactMe.js";
import Login from "../pages/login";
import LayoutWithHeader from "./withheader";
import LayoutWithoutHeader from "./withoutheader";
import Signup from "../pages/signup";

const RoutesLogic = () => {
    return (

        <Routes>
            <Route element={<LayoutWithHeader/>}>
            <Route path="/aboutme" element={<AboutMe/>}></Route>
            <Route path='/skills' element={<Skills/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/page4' element={<ContactMe/>}></Route>  
            </Route>
            
            <Route element={<LayoutWithoutHeader/>}>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>

            </Route>
            
        </Routes>
     
    )
}
export default RoutesLogic

