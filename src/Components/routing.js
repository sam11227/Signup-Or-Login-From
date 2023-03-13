import React from "react";
import { Routes, Route } from 'react-router-dom';
import LoginForm from "./loginform";
import SignupForm from "./signfrom";

const Routing = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<SignupForm/>}/>
                <Route path="/signfrom" element ={<SignupForm/>}/>
                <Route path="/loginform" element = {<LoginForm/>}/>
            </Routes>

        </div>
    )
}
export default Routing;