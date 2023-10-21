
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Header = () => {
const {user,userLogOut,loading} = useContext(AuthContext)
//const[uid,setuid] =useState(null)
let uid=null
if(user){
   uid=user.uid
 }

const signOutHandler = () => {
    userLogOut()
        .then(() => {
            console.log('user logged out successfully')
        })
        .catch(error => console.error(error))
}
    const navLinks = <div className="flex font-semibold">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addproduct">Add product</Link></li>
        <li><Link to={`/mycart/${uid}`}>My Cart</Link></li>
    </div>
    return (
        <div className="navbar container mx-auto rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="flex items-center">

                    <p className="text-3xl font-bold">Road<span className="text-[#FF002D]">Beasts</span></p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {


                    user ? <>  <div className="flex justify-items-end items-center   text-[12px] lg:text-[14px]">
                        {user.displayName}<img className=" rounded-full w-6 h-6 md:w-7 md:h-7 lg:h-7 lg:w-7 ml-2 " src={`${user.photoURL}`}></img>
                    </div>
                        <button onClick={signOutHandler} className="btn btn-sm px-2 py-1 ml-1 md:ml-2 lg:ml-2">Log Out</button>
                    </> : <><NavLink to="/login"><button className="btn btn-sm mr-2">Log in</button></NavLink><NavLink to="/register"><button className="btn btn-sm">Register</button></NavLink></>
                }
            </div>
        </div>
    );
};

export default Header;