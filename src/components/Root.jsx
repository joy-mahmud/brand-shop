import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";


const Root = () => {
    const[black,setTheme]=useState(true)
  const handleTheme=()=>{
        setTheme(!black)
    }
    return (
        <div style={{backgroundColor:black?"#001a23": "white", color:black?"white":''}}>
            <div className="flex justify-end"><button onClick={handleTheme} className="btn btn-sm">{black?"Light":"Dark"}</button></div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;