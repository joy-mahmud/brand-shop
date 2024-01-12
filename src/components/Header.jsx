
import { useContext, useEffect, useState, } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import userIcon from '../assets/userIcon.png'
import updateProfileIcon from '../assets/editprofileIcon.png'
import { FaCaretRight, FaCartArrowDown, FaCartPlus, FaSignOutAlt } from "react-icons/fa";


const Header = () => {
    const { user, userLogOut } = useContext(AuthContext)
    const [showDropDown, setShowDropDown] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)

    }, [theme])

   
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }
    //const[uid,setuid] =useState(null)
    let uid = null
    if (user) {
        uid = user.uid
    }

    const signOutHandler = () => {
        handleDropdown()
        userLogOut()
            .then(() => {
                console.log('user logged out successfully')
            })
            .catch(error => console.error(error))
    }
    const navLinks = <div className="lg:flex font-semibold">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addproduct">Add product</Link></li>
        <li><Link to={`/mycart/${uid}`}>My Cart</Link></li>

    </div>
    const handleDropdown = () => {
        setShowDropDown(!showDropDown)
    }
    // console.log(user)
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
            <div className="navbar-end relative">
                {


                    user ? <>  <div className="flex justify-items-end items-center   text-[12px] lg:text-[14px]">
                        {user.photoURL ? <img onClick={handleDropdown} className="hover:cursor-pointer rounded-full w-6 h-6 md:w-7 md:h-7 lg:h-7 lg:w-7 ml-2 " src={`${user.photoURL}`}></img> : <img onClick={handleDropdown} className="w-7 h-7 rounded-full hover:cursor-pointer" src={userIcon} alt="" />}
                    </div>

                    </> : <><NavLink to="/login"><button className="btn btn-sm mr-2">Log in</button></NavLink><NavLink to="/register"><button className="btn btn-sm">Register</button></NavLink></>
                }

            </div>
            <div className={showDropDown ? '' : 'hidden z-50 dropdown'}>
                {/* <div className="w-5 h-5 absolute top-14 z-10 bg-slate-300 rotate-45 right-[86px]"></div> */}
                <div className="w-52 p-3 bg-slate-300 absolute top-16 right-2 rounded-lg dropdown-content">

                    <ul className="w-full space-y-2">
                        <h2 className="text-center text-2xl font-semibold">{user?.displayName}</h2>
                        <Link to={'/updateProfile'}> <li onClick={handleDropdown} className="flex items-center border-2 mt-2 border-slate-500 rounded-lg w-full"><img className="h-8 w-8" src={updateProfileIcon} alt="" /><p>Update profile</p></li></Link>
                        <Link to={`/myCart/${uid}`}><li onClick={handleDropdown} className="flex mt-2 p-1 items-center border-2 border-slate-500 rounded-lg w-full"><FaCartArrowDown className="text-2xl"></FaCartArrowDown><p className="ml-2">My cart</p></li></Link>
                        <li onClick={signOutHandler} className="flex p-1 hover:cursor-pointer items-center border-2 border-slate-500 rounded-lg w-full" ><FaSignOutAlt className="text-2xl"></FaSignOutAlt><p className="ml-2">Logout</p></li>
                    </ul>
                </div>

            </div>

            <div className="ml-2">
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onChange={handleToggle} />

                    {/* sun icon */}
                    <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
        </div>
    );
};

export default Header;